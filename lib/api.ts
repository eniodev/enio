import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { POSTS_PATH } from '../utils/mdxUtils';

export function getPostSlugs(path: string): string[] {
  return fs.readdirSync(path);
}

type PostItems = {
  [key: string]: string;
};

export function getPostBySlug(slug: string, fields: string[] = [], path: string): PostItems {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(path, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostItems = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = [], path: string): PostItems[] {
  const slugs = getPostSlugs(path);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, path))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
