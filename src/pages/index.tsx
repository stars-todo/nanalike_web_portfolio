import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@layouts/PageLayout';
import Main from '@layouts/Main';
import About from '@layouts/About';
import Works from '@layouts/Works';
import Blog from '@layouts/Blog';
import Contact from '@layouts/Contact';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <Main />
      <About />
      <Works />
      <Blog />
      <Contact />
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
