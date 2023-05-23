import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@layouts/PageLayout';
import Main from '@layouts/Main/Main';
import About from '@layouts/About/About';
import Works from '@layouts/Works/Works';
import Blog from '@layouts/Blog/Blog';
import Contact from '@layouts/Contact/Contact';

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
