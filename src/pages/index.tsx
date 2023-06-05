import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@layouts/PageLayout';
import Main from '@layouts/Main/Main';
import About from '@layouts/About/About';
import Works from '@layouts/Works/Works';
import Blog from '@layouts/Blog/Blog';
import Contact from '@layouts/Contact/Contact';
import SEO from '@components/SEO/SEO';

const IndexPage: React.FC<PageProps> = () => {
  console.log(
    '%c 안녕하세요! 👋',
    'background-color:#212121; color: #fff; font-weight:bold; font-size:120%; padding: 4px;'
  );
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

export const Head: HeadFC = () => <SEO />;
