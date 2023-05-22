import React from 'react';
import Header from '@components/Header/Header';
import LikeButton from '@components/LikeButton/LikeButton';

interface PageLayoutProps {
  children?: any;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <LikeButton />
    </div>
  );
};

export default PageLayout;
