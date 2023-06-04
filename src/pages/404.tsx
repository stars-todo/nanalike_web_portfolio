import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import CustomLink from '@components/CustomLink/CustomLink';
import CustomButton from '@components/CustomButton/CustomButton';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 40,
        color: '#fff',
        background: '#222'
      }}
    >
      <h1>
        ?! 길을 잃으신 것 같아요.
        <br />
        이곳을 나가는 포탈을 열어드릴게요!
      </h1>
      <div style={{ color: '#fff', transform: `scale(1.3)` }}>
        <CustomButton href="/">홈 화면으로 돌아가기</CustomButton>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
