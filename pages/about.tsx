import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Projects - Énio Carlos',
      }}
    >
      <h1>🏗️</h1>
      <p>I've been building...</p>
    </Layout>
  );
};

export default About;
