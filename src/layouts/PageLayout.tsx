import React, { useRef } from 'react';
import Header from '@components/Header/Header';
import LikeButton from '@components/LikeButton/LikeButton';

interface PageLayoutProps {
  children?: any;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef}>
      <Header />
      <main ref={scrollRef}>{children}</main>
      <LikeButton />
    </div>
  );
};

export default PageLayout;
