import React, { useEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@layouts/PageLayout';
import Main from '@layouts/Main/Main';
import About from '@layouts/About/About';
import Works from '@layouts/Works/Works';
import Blog from '@layouts/Blog/Blog';
import Contact from '@layouts/Contact/Contact';
import ASScroll from '@ashthornton/asscroll';
import Copyright from '@components/Copyright/Copyright';

const IndexPage: React.FC<PageProps> = () => {
  // const initialFunction = () => {
  //   const asscroll = new ASScroll();
  //   asscroll.enable();
  // };

  // useEffect(() => {
  //   initialFunction();
  // }, []);

  return (
    <div asscroll-container="true">
      <PageLayout>
        <Main />
        <About />
        <Works />
        <Blog />
        <Contact />
      </PageLayout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>나나라이크 | 웹 퍼블리셔 포트폴리오</title>;
