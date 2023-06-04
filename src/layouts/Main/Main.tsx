import React, { useRef } from 'react';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import classNames from 'classnames/bind';
import * as styles from './Main.module.scss';
import NanalikeLogo from '@components/Logo/NanalikeLogo';
import Ticket from '@components/Ticket/Ticket';
import ticketImage from './ticket_no_border.png';
const c = classNames.bind(styles);

const Main = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['0', '1']
  });

  function useParallax(value: MotionValue<number>, distance: any) {
    return useTransform(value, [0, 1], [distance, `-${distance}`]);
  }

  const titleOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const guideOpacity_1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const guideOpacity_2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  // const backgroundY = 0;
  const backgroundY = useParallax(scrollYProgress, 500);
  const nananaAlpha = useTransform(scrollYProgress, [0.7, 1], [1, 0]);

  return (
    <>
      <article className={c('main')} ref={mainRef}>
        <div className={c('inner')}>
          <motion.div style={{ opacity: titleOpacity }} className={c('title')}>
            <div className={c('title_inner')}>
              <strong className={c('title_sub')}>좋아하니까, 나나답게</strong>
              <NanalikeLogo className={c('logo')} />
            </div>
            <p className={c('desc')}>
              <span>
                탄탄한 코드 위에 감각적인 인터페이스를 그리는 UI 개발자 나나입니다.
              </span>
              <span>사용하기 쉬운 UI와 기억에 남는 UX를 개발하는 일을 해요.</span>
              <br className={c('mobile')} />
              <span>좋아하면 더 잘한다는 마음으로, 즐겁게 일하고 있어요!</span>
            </p>
          </motion.div>
          <div className={c('guide')} aria-hidden="true">
            <motion.div className={c('text')} style={{ opacity: guideOpacity_1 }}>
              Let's Scroll Down!
            </motion.div>
            <motion.div className={c('text')} style={{ opacity: guideOpacity_2 }}>
              Good! Please Keep Scrolling!
            </motion.div>
            <svg
              className={c('icon')}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 34"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M.152 17.172c0-3.196.901-7.206 2.906-9.85v-2.12c1.104-1.047 3.138-1.57 6.015-1.57 2.179 0 4.561.64 5.579 1.54.029.087-.059 1.162-.059 1.627 0 1.017.059 1.395 1.366 3.051 1.424 1.802 1.889 2.964 1.889 4.707 0 2.005-.262 3.632-.756 4.853a24.737 24.737 0 0 0-.959 2.818 2.757 2.757 0 0 1-.435.93c-.059.842-.117 1.685-.204 2.528A354.273 354.273 0 0 1 15 29.899c-.29 2.383-.959 3.4-2.353 3.4-1.366 0-2.005-.96-2.005-2.848 0-.668.087-2.034.087-3.254 0-.93-.058-1.83-.116-2.673-.494.348-.988.464-1.686.464-.93 0-1.482-.406-1.86-1.249-.115-.262-.232-.407-.435-.407-.32 0-.756.29-1.308.29-.988 0-1.685-.493-2.005-1.423-.087-.262-.145-.29-.58-.29-1.744 0-2.587-1.657-2.587-4.737Zm.988 0v1.163c.146-.465.378-1.076.843-1.976.61-1.163 1.395-2.15 2.034-2.586.145-.058.378-.088.581-.088.378 0 .726.175.959.378.378-.726.755-1.365 1.017-1.685.174-.145.494-.29.871-.32-.174-.523-.232-1.104-.232-1.772 0-.465.058-.959.145-1.308h1.017c-.087.32-.116.93-.116 1.308 0 .814.087 1.453.349 1.976.465.261.784.726.842 1.307.262-.087.552-.145.843-.145.988 0 1.83.64 1.83 1.83 0 .436-.145.872-.32 1.337.204.145.437.32.698.465.175-.64.407-1.133.61-1.337l.698.785c-.378.349-.959 3.458-.959 4.649 0 .785.494 1.54 1.569 1.54h.29v-.03c.088 0 .32-.377.407-.696.146-.523.465-1.628 1.017-2.964.436-1.075.669-2.586.669-4.446 0-1.51-.378-2.44-1.686-4.068-1.365-1.714-1.569-2.382-1.569-3.69 0-.29.03-.755.058-1.104-1.017-.581-2.847-1.017-4.532-1.017-2.325 0-3.981.349-4.969 1.017v1.976C2.303 9.792 1.14 13.453 1.14 17.172Zm.96-14.76C2.1.523 6.195 0 8.87 0c2.643 0 6.798.552 6.798 2.412V4.59c0 .349-.261.581-.697.581h-.058c.174-.145.203-.232.203-.436 0-1.627-3.632-2.063-6.247-2.063-2.673 0-6.276.523-6.276 2.063 0 .204.087.32.29.436H2.68c-.32 0-.58-.145-.58-.581V2.41Zm8.542 18.102c.697.203 1.046 1.046 1.046 1.888 0 .523-.03.814-.088 1.075.059 1.163.175 2.587.175 3.72 0 1.25-.087 2.615-.087 3.254 0 1.395.29 1.801.959 1.801.726 0 1.017-.61 1.307-2.498.174-1.163.349-2.76.494-4.213.058-.524.087-1.163.145-1.831h-.145c-1.685 0-2.644-1.162-2.644-2.499 0-.755.174-2.005.436-3.138-.29-.145-.552-.32-.814-.494v.03c-.174.493-.552 1.394-.784 2.905ZM7.3 21.53c0 .465.175.9.64 1.656.406.64.493.755.9.755.698 0 1.366-.087 1.802-.639.029-.203.029-.378.029-.523 0-1.104-.436-1.424-1.192-1.424.204-1.888.582-2.934.988-4.01.233-.726.785-1.51.698-2.15-.03-.32-.204-.755-.756-.755-.232 0-.61.145-.697.174-.436.552-1.133 1.657-1.802 3.545-.406 1.133-.61 2.615-.61 3.37Zm-3.225-.465c0 .9.32 1.627 1.133 1.627.465 0 .9-.116 1.191-.232a1.878 1.878 0 0 1-.145-.785c0-.668.262-2.412.668-3.661a16.525 16.525 0 0 1 1.628-3.516c.087-.232.145-.436.145-.64 0-.522-.465-.842-.959-.842-.232 0-.494.087-.668.204-.407.552-1.395 2.47-1.889 3.748-.668 1.714-1.104 2.993-1.104 4.097Zm-2.237-1.104c0 .93.726 1.075 1.162 1.075.058 0 .116 0 .174-.03v-.203c0-1.598.727-3.05 1.162-4.126.204-.465.465-1.075.756-1.656a1.314 1.314 0 0 0-.726-.348c-.436.32-1.047 1.075-1.482 1.86-.581 1.045-1.046 1.655-1.046 3.428Z"
              />
            </svg>
          </div>
          <motion.div
            style={{ opacity: nananaAlpha }}
            className={c('nananana')}
          ></motion.div>
        </div>
      </article>
      <div className={c('decoration')}>
        <motion.div className={c('bg')} style={{ y: backgroundY }}></motion.div>
        <motion.div className={c('ticket')}>
          {/* <div className={c('ticket_img')}>
            <span>May 26, 2023</span>
            <p>May 26, 2023</p>
          </div> */}
          <Ticket src={ticketImage} />
        </motion.div>
      </div>
    </>
  );
};

export default Main;
