import React from 'react';
import Layout from '../components/Layout';

{/** Experimental */}

import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import { PROJECTS_PATH } from '../utils/mdxUtils';

type IndexProps = {
  posts: PostType[];
};

export const About = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Énio Carlos',
      }}
    >
      <h1>🏗️</h1>
      <p>I&apos;ve been building...</p>

      {/** Experimental */}
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-base">
            <Link as={`/projects/${post.slug}`} href={`/projects/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
        </article>
      ))}

    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'], PROJECTS_PATH);

  return {
    props: { posts },
  };
};

export default About;
