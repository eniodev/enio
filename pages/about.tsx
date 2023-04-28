import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Énio Carlos',
      }}
    >
      <h1>Explore Some of My Projects</h1>
      <p>These are personal projects so feel free to reach out and ask about anything if you have questions 😎</p>
    </Layout>
  );
};

export default About;
