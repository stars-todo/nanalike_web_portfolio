import React, { useEffect, useRef, useState } from 'react';
import Header from '@components/Header/Header';
import LikeButton from '@components/LikeButton/LikeButton';
import CustomCursor from '@components/CustomCursor/CustomCursor';

interface PageLayoutProps {
  children?: any;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const scrollRef = useRef(null);

  // const userAgent =
  //   typeof window !== `undefined` ? navigator.userAgent.toLowerCase() : '';
  // const [isMobileDevice, setIsMobileDevice] = useState(false);
  // useEffect(() => {
  //   const isMobileDevice = (): boolean => {
  //     return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
  //       userAgent
  //     );
  //   };
  //   setIsMobileDevice(isMobileDevice());
  // }, [userAgent]);

  // console.log('모바일접속?', isMobileDevice);
  return (
    <div>
      {/* {!isMobileDevice && <CustomCursor />} */}
      <Header />
      <main ref={scrollRef}>{children}</main>
      {/* <LikeButton /> */}
    </div>
  );
};

export default PageLayout;
