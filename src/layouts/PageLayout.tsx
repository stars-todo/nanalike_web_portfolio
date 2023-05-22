import React from 'react';
import Header from '@components/Header';
import LikeButton from '@components/LikeButton';

interface PageLayoutProps {
  children?: any;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <LikeButton />
    </div>
  );
};

export default PageLayout;
