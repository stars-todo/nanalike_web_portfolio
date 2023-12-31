import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import * as styles from './Contact.module.scss';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import Alphabet from '@components/Alphabet/Alphabet';
import CustomButton from '@components/CustomButton/CustomButton';
import CustomLink from '@components/CustomLink/CustomLink';
import Copyright from '@components/Copyright/Copyright';
import LangSelect from '@components/LangSelect/LangSelect';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewport from '@hooks/useViewport';
import MailAddress from '@components/MailAddress/MailAddress';
const c = classNames.bind(styles);

const Footer = ({ scrollYProgress }: any) => {
  return (
    <motion.footer className={c('footer')}>
      <div className={c('thanks')}>
        <div className={c('thanks_title')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="13" fill="none">
            <path
              fill="#A5A5A5"
              d="m1.179 5.16.486-2.664c.888 0 1.548-.036 1.98-.108l.234-.054c-.168.84-.354 1.782-.558 2.826h2.232l-.036.324h-2.25c-.6 3.096-.9 4.962-.9 5.598 0 .384.204.576.612.576.408 0 .78-.258 1.116-.774a5.32 5.32 0 0 0 .72-1.674l.324.108c-.444 1.896-1.362 2.844-2.754 2.844-.576 0-1.056-.156-1.44-.468-.384-.324-.576-.768-.576-1.332 0-.576.246-2.202.738-4.878H.225L.26 5.16h.918ZM12.613 11.802c.288 0 .588-.168.9-.504l.27.216c-.084.168-.27.318-.558.45a2.262 2.262 0 0 1-.954.198c-1.092 0-1.638-.492-1.638-1.476 0-.42.108-1.17.324-2.25.216-1.08.324-1.788.324-2.124 0-.516-.246-.774-.738-.774-.408 0-.804.276-1.188.828-.372.552-.678 1.302-.918 2.25L7.843 12h-2.16L7.681.696c-.36.036-.66.204-.9.504l-.27-.216c.36-.432.81-.648 1.35-.648.552 0 .978.138 1.278.414.3.276.45.666.45 1.17 0 .096-.012.252-.036.468l-.756 4.266c.492-1.104 1.254-1.656 2.286-1.656.708 0 1.26.204 1.656.612.396.396.594.948.594 1.656 0 .372-.114 1.092-.342 2.16-.228 1.056-.354 1.848-.378 2.376ZM20.989 12.162c-1.056 0-1.632-.462-1.728-1.386-.528.924-1.194 1.386-1.998 1.386s-1.446-.24-1.926-.72c-.468-.492-.702-1.176-.702-2.052 0-1.368.336-2.442 1.008-3.222.672-.78 1.542-1.17 2.61-1.17.876 0 1.458.414 1.746 1.242.06-.36.126-.72.198-1.08.888 0 1.548-.036 1.98-.108l.234-.054-1.242 6.804c.36-.036.66-.204.9-.504l.27.216c-.36.432-.81.648-1.35.648Zm-4.32-1.854c0 .54.066.918.198 1.134.144.204.36.306.648.306.288 0 .582-.156.882-.468.396-.408.714-.924.954-1.548.036-.156.102-.528.198-1.116.108-.6.198-1.092.27-1.476a2.528 2.528 0 0 0-.378-1.188c-.216-.336-.486-.504-.81-.504-.588 0-1.062.528-1.422 1.584a9.978 9.978 0 0 0-.54 3.276ZM30.32 11.802c.288 0 .588-.168.9-.504l.27.216c-.084.168-.27.318-.558.45a2.262 2.262 0 0 1-.954.198c-1.092 0-1.638-.492-1.638-1.476 0-.42.108-1.17.324-2.25.216-1.08.324-1.788.324-2.124 0-.516-.246-.774-.738-.774-.396 0-.78.258-1.152.774-.36.516-.66 1.224-.9 2.124l-.612 3.366c.372-.036.678-.204.918-.504l.27.216c-.36.432-.81.648-1.35.648s-.966-.138-1.278-.414c-.3-.276-.45-.636-.45-1.08 0-.168.096-.828.288-1.98l.594-3.33c-.36.036-.66.204-.9.504l-.27-.216c.36-.432.81-.648 1.35-.648.552 0 .978.138 1.278.414.3.276.45.666.45 1.17v.108c.492-1.128 1.26-1.692 2.304-1.692.708 0 1.26.204 1.656.612.396.396.594.948.594 1.656 0 .372-.114 1.092-.342 2.16-.228 1.056-.354 1.848-.378 2.376ZM34.928 8.526 34.28 12h-2.142L34.172.696c-.36.036-.66.204-.9.504l-.27-.216c.36-.432.81-.648 1.35-.648.552 0 .978.138 1.278.414.3.276.45.666.45 1.17 0 .096-.012.252-.036.468-.276 1.524-.576 3.168-.9 4.932.3-.732.732-1.302 1.296-1.71.564-.408 1.164-.612 1.8-.612.636 0 1.08.126 1.332.378.264.252.396.57.396.954 0 .372-.114.678-.342.918-.228.24-.528.36-.9.36-.36 0-.642-.102-.846-.306-.192-.216-.288-.528-.288-.936 0-.42.144-.738.432-.954-1.152.132-2.07.984-2.754 2.556.168-.024.312-.036.432-.036.636 0 1.134.126 1.494.378.372.252.612.564.72.936.108.36.186.726.234 1.098.048.36.126.666.234.918a.58.58 0 0 0 .576.378.743.743 0 0 0 .648-.342l.27.216c-.084.168-.27.318-.558.45-.288.132-.66.198-1.116.198a2.12 2.12 0 0 1-1.188-.342 1.823 1.823 0 0 1-.702-.846 9.16 9.16 0 0 1-.324-1.026c-.228-.864-.582-1.338-1.062-1.422ZM42.202 11.694c1.188 0 1.782-.876 1.782-2.628 0-.432-.066-.942-.198-1.53-.12-.588-.192-.954-.216-1.098-.732.756-1.554 1.212-2.466 1.368v-.432c.864-.192 1.674-.684 2.43-1.476v-.072c0-.288.042-.57.126-.846.084-.276.168-.48.252-.612l.126-.198h.432c0 .528.084 1.014.252 1.458.168.432.354.786.558 1.062.204.264.39.618.558 1.062.168.432.252.912.252 1.44 0 .852-.324 1.56-.972 2.124-.636.564-1.404.846-2.304.846-.9 0-1.584-.204-2.052-.612-.456-.408-.684-.876-.684-1.404 0-.54.132-.924.396-1.152.264-.24.576-.36.936-.36.36 0 .654.12.882.36.24.228.36.528.36.9 0 .36-.114.666-.342.918a1.135 1.135 0 0 1-.882.378c-.156 0-.318-.024-.486-.072.264.384.684.576 1.26.576ZM52.085 5.16l.486-2.664c.888 0 1.548-.036 1.98-.108l.234-.054c-.168.84-.354 1.782-.558 2.826h2.232l-.036.324h-2.25c-.6 3.096-.9 4.962-.9 5.598 0 .384.204.576.612.576.408 0 .78-.258 1.116-.774a5.32 5.32 0 0 0 .72-1.674l.324.108c-.444 1.896-1.362 2.844-2.754 2.844-.576 0-1.056-.156-1.44-.468-.384-.324-.576-.768-.576-1.332 0-.576.246-2.202.738-4.878h-.882l.036-.324h.918ZM59.596 12.162c-.924 0-1.626-.228-2.106-.684-.48-.468-.72-1.05-.72-1.746 0-.708.06-1.308.18-1.8.132-.504.342-.984.63-1.44.288-.468.72-.834 1.296-1.098.588-.264 1.314-.396 2.178-.396.876 0 1.554.234 2.034.702.492.456.738 1.086.738 1.89 0 1.368-.366 2.472-1.098 3.312-.72.84-1.764 1.26-3.132 1.26Zm-.792-1.854c0 .96.276 1.44.828 1.44.564 0 1.062-.48 1.494-1.44.444-.972.666-2.124.666-3.456 0-1.008-.276-1.512-.828-1.512-.54 0-1.038.462-1.494 1.386-.444.912-.666 2.106-.666 3.582Z"
            />
          </svg>
        </div>
        <span className="screenOut">Thanks to</span>
        <div className={c('names')}>
          <div className={c('thanks_name')}>
            <a href="https://yeon.me" target="_blank" rel="noopener noreferrer">
              yeon.me
            </a>
            <span>Server Dev.</span>
          </div>
          {/* <div className={c('thanks_name')}>
            <a href="http://vid3d.net" target="_blank" rel="noopener noreferrer">
              vid3d.net
            </a>
            <span>3D Icon Modeling</span>
          </div> */}
        </div>
      </div>
    </motion.footer>
  );
};

const Contact = () => {
  const { isMobile } = useViewport();
  const articleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['0', '1']
  });
  const alphabetOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  // const footerOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0]);

  function fadeInUp(y = 30, duration = 0.7) {
    return {
      hidden: {
        opacity: 0,
        y: y
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: 'easeInOut',
          duration: duration
        }
      }
    };
  }

  const animation = {
    trigger: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.1
        }
      }
    },
    contents: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.4,
          when: 'beforeChildren',
          staggerChildren: 0.1
        }
      }
    },
    links: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.05
        }
      }
    },
    link: {
      hidden: {
        opacity: 0,
        x: -20
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          ease: 'easeInOut',
          duration: 0.6
        }
      }
    },
    mailReveal: {
      hidden: {
        opacity: 0
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.02, delayChildren: i * 0 }
      })
    },
    mailText: {
      hidden: {
        y: isMobile ? 50 : 100,
        skewY: 10,
        transition: {
          type: 'spring',
          damping: 10,
          stiffness: 100
        }
      },
      visible: {
        y: 0,
        skewY: 0,
        transition: {
          type: 'spring',
          damping: 10,
          stiffness: 100
        }
      }
    }
  };

  const [mailHover, setMailHover] = useState(false);

  return (
    <motion.article
      className={c('contact', { mailHover })}
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.25 }}
      variants={animation.trigger}
      ref={articleRef}
    >
      <div className={c('contact_inner')}>
        <motion.div>
          <motion.div variants={fadeInUp()}>
            <ArticleTitle className={c('title')}>Contact</ArticleTitle>
          </motion.div>
          <motion.div variants={fadeInUp()} className={c('title_sub')}>
            <span>똑똑, 함께 일할 사람을 찾고 계신가요?</span>{' '}
            <span className={c('hiddenText')}>메일은 언제든 환영이에요 🙌</span>
          </motion.div>
          <MailAddress className={c('mail')} setMailHover={setMailHover} />
          <motion.div variants={fadeInUp()}>
            {/* <CustomButton icon="download" className={c('download')}>
              이력서 다운로드
            </CustomButton> */}
          </motion.div>
        </motion.div>
        <motion.div className={c('contents')} variants={animation.contents}>
          <motion.div className={c('desc')} variants={fadeInUp(40)}>
            <p>
              역량과 경험을 갖춘 웹 퍼블리셔를 찾고 계신가요? 합류 및 협업 제안이
              있으시다면 언제든지 연락해 주세요! 함께 할 멋진 일에 대해 메일을 보내주시면
              1~2일 내로 답장을 드릴게요.
            </p>
          </motion.div>
          <motion.div className={c('desc')} variants={fadeInUp(40)}>
            <p>
              또는 저와 나누고 싶은 얘기가 있으신가요? 포트폴리오나 개발과 관련이 없는
              내용이여도 좋아요. 궁금한 내용이 있다면 편하게 말씀해 주세요 :)
            </p>
            <motion.div className={c('links')} variants={animation.links}>
              <motion.div variants={animation.link}>
                <CustomLink href="mailto:nykim@nykim.net">메일 보내기</CustomLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer scrollYProgress={scrollYProgress} />
      {/* <LangSelect className={c('langs')} /> */}
      <Copyright className={c('copy')} />
      {/* <Alphabet type="e" className={c('e')} /> */}
      <motion.div
        className={c('like')}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        style={{ opacity: alphabetOpacity }}
        viewport={{ amount: 0.1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1926 929"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M254.521 865.37c-12.255 16.025-29.223 30.637-50.905 43.834C182.878 922.401 155.54 929 121.604 929s-62.687-10.841-86.254-32.522C11.783 874.797 0 844.16 0 804.568c0-7.542.943-19.796 2.828-36.764l91.91-509.041c16.968-93.325 40.064-159.783 69.286-199.375C194.19 19.796 233.782 0 282.801 0c33.936 0 61.744 12.726 83.426 38.178 22.624 25.452 33.936 64.101 33.936 115.948 0 51.847-20.267 125.847-60.802 221.999-39.592 96.152-59.388 166.381-59.388 210.686h-25.452c0-49.961 19.796-121.133 59.388-213.514 39.592-93.324 59.388-167.795 59.388-223.413 0-33.936-8.013-63.158-24.038-87.668-15.083-24.51-33.936-36.764-56.56-36.764-.943 24.51-17.44 134.802-49.49 330.877-31.109 195.132-62.217 376.596-93.325 544.391 26.395 0 50.904-13.669 73.528-41.006 22.625-27.338 38.65-54.675 48.077-82.012l15.554-42.42 25.452 11.312c-2.828 13.197-10.37 32.522-22.624 57.974-11.312 24.509-23.096 44.776-35.35 60.802ZM679.174 878.096C650.894 912.032 615.544 929 573.124 929c-42.42 0-75.885-10.841-100.394-32.522-23.567-21.681-35.35-49.962-35.35-84.84 0-12.255 7.541-63.63 22.624-154.127l46.662-253.106h-59.388l2.828-25.452h60.802c69.758 0 121.133-2.828 154.126-8.484l19.796-4.242-97.566 534.493c28.28-2.828 51.847-16.025 70.7-39.592l21.21 16.968ZM554.742 230.482c-19.796-19.796-29.694-43.834-29.694-72.114s9.898-52.318 29.694-72.114c19.796-20.739 43.834-31.108 72.114-31.108s52.318 10.37 72.114 31.108c20.739 19.796 31.109 43.834 31.109 72.114s-10.37 52.318-31.109 72.114c-19.796 19.797-43.834 29.695-72.114 29.695s-52.318-9.898-72.114-29.695ZM991.934 643.371 941.03 916.274H772.764L932.546 28.28c-28.28 2.828-51.847 16.025-70.7 39.592l-21.21-16.968C868.916 16.968 904.266 0 946.686 0c43.363 0 76.824 10.84 100.394 32.522 23.57 21.681 35.35 52.318 35.35 91.91 0 7.542-.94 19.796-2.83 36.764-21.68 119.719-45.25 248.865-70.7 387.437 23.57-57.503 57.51-102.279 101.81-134.33 44.31-32.051 91.44-48.076 141.4-48.076 49.96 0 84.84 9.898 104.64 29.694 20.74 19.796 31.11 44.777 31.11 74.942 0 29.223-8.96 53.261-26.87 72.114-17.91 18.854-41.48 28.28-70.7 28.28-28.28 0-50.43-8.012-66.46-24.038-15.08-16.968-22.62-41.477-22.62-73.528 0-32.993 11.31-57.974 33.93-74.942-90.49 10.369-162.61 77.299-216.34 200.788 13.2-1.885 24.51-2.828 33.94-2.828 49.96 0 89.08 9.898 117.36 29.694 29.22 19.796 48.07 44.306 56.56 73.528a540.696 540.696 0 0 1 18.38 86.255c3.77 28.28 9.9 52.318 18.38 72.114 8.49 19.796 23.57 29.694 45.25 29.694s38.65-8.955 50.91-26.866l21.21 16.968c-6.6 13.197-21.21 24.981-43.84 35.35-22.62 10.369-51.85 15.554-87.67 15.554-34.88 0-65.98-8.955-93.32-26.866-26.4-17.911-44.78-40.063-55.15-66.458-10.37-27.338-18.85-54.204-25.45-80.598-17.91-67.873-45.72-105.108-83.426-111.707ZM1743.57 366.227c119.72 0 179.58 47.605 179.58 142.814 0 59.388-28.28 104.636-84.84 135.744-55.62 30.166-135.27 45.72-238.96 46.662-1.89 33.937-2.83 60.803-2.83 80.599 0 42.42 9.42 73.999 28.28 94.738 19.79 19.796 44.3 29.694 73.53 29.694 29.22 0 55.61-5.656 79.18-16.968 24.51-11.312 43.83-24.51 57.97-39.592 14.14-16.026 26.4-32.522 36.77-49.49 18.85-31.108 28.28-50.904 28.28-59.388l25.45 11.312c-2.83 15.082-11.31 35.35-25.45 60.802-14.14 24.509-29.7 44.776-46.66 60.802-16.97 16.025-41.95 31.108-74.95 45.248-32.99 13.197-69.75 19.796-110.29 19.796-76.35 0-134.33-17.911-173.92-53.732-38.65-36.764-57.97-86.726-57.97-149.884 0-112.178 27.8-199.846 83.42-263.005 55.62-64.102 130.09-96.152 223.41-96.152Zm144.23 142.814c0-31.108-9.42-56.56-28.28-76.356-17.91-20.739-45.25-31.108-82.01-31.108-35.82 0-71.17 21.681-106.05 65.044-33.94 43.363-56.56 107.464-67.87 192.304 189.47-.942 284.21-50.904 284.21-149.884Z"
          />
        </svg>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        style={{ opacity: alphabetOpacity }}
        viewport={{ amount: 0.1 }}
      >
        <Alphabet type="e" className={c('alphabet', 'e')} />
      </motion.div> */}
    </motion.article>
  );
};

export default Contact;
