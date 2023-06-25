import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import { POSTS_PATH } from '../utils/mdxUtils';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Énio Carlos</h1>
      <p>
        Hi! I&apos;m énio, a 21 y/o software engineer constantly breaking and building things.
        I like <b>reading articles</b> at midnight, <b>explaining technical things</b>, and <b>building my own version</b> of things I&apos;m trying to understand :] 

      </p>
      <p>Currently I&apos;m reading <i>HTTP, The Definitive Guide</i>, building <b>mid</b> and learning how to invest.</p>

      <p className="text-sm mt-12 text-gray-500">Posts</p>
      {posts.map((post) => (
        <article key={post.slug} className="mt-6">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-base">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white ">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
         {/**
          * 
          * <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
          */} 
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title'], POSTS_PATH);

  return {
    props: { posts },
  };
};

export default Index;
