import React from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

const LogoText = ({ children }: { children: ReactNode }) => {
  return <span className={'text-primary font-extrabold text-[16vw]'}>{children}</span>;
};

function scroll2() {
  const { scrollYProgress } = useScroll({ offset: ['0vh', '100vh'] });
  const ref = useRef(null);
  const isInView = useInView(ref);
  const x1 = useTransform(scrollYProgress, [0, 0.75], ['15%', '80%']);
  const x2 = useTransform(scrollYProgress, [0, 0.75], ['10%', '0%']);
  const opacity = useTransform(scrollYProgress, [0.75, 1], ['100%', '0%']);

  return (
    <div className={'bg-bg flex flex-col'}>
      <div className={'h-[100vh]'} ref={ref}>
        {isInView && (
          <>
            <motion.div style={{ x: x1, opacity }} className={'fixed top-1/4 flex'}>
              <LogoText>Climb</LogoText>
            </motion.div>
            <motion.div
              style={{ x: x2, opacity }}
              className={'fixed top-1/4 p-[20vw] flex'}
            >
              <LogoText>Balance</LogoText>
            </motion.div>
          </>
        )}
      </div>
      <div className={'h-[400px]'} style={{ height: 400 }} ref={ref}></div>
      <img src="https://source.unsplash.com/random/?beautiful" />
      <div className={'h-[100rem] w-full'}></div>
    </div>
  );
}

export default scroll2;
