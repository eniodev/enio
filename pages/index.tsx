import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <h1>Énio Carlos</h1>
      <p>Software Engineer & Automation Enthusiast 👨🏿‍💻 HTTP Evangelist 📣 Building on the Web 🌐 & Mobile 📱</p>
      <ul className="list-disc pl-4 my-6">
        <li>React</li>
        <li className="mt-2">React Native</li>
        <li className="mt-2">Node</li>
        <li className="mt-2">TypeScript</li>
      </ul>

      <div className="flex items-center justify-start">
        <span className="relative flex h-3 w-3 ml-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>  
        <a href="https://twitter.com/eniocarlosao" className="inline-block px-7 py-3 rounded-md text-white dark:text-white hover:text-white dark:hover:text-white">→ <i>Let&apos;s talk 👋🏿</i></a>
    </div>


      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.title}
              </a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
