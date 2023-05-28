import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import * as styles from './Contact.module.scss';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import Alphabet from '@components/Alphabet/Alphabet';
import CustomButton from '@components/CustomButton/CustomButton';
import CustomLink from '@components/CustomLink/CustomLink';
import Copyright from '@components/Copyright/Copyright';
import LangSelect from '@components/LangSelect/LangSelect';
import { motion, useScroll, useTransform } from 'framer-motion';
const c = classNames.bind(styles);

const Footer = ({ scrollYProgress }: any) => {
  return (
    <motion.footer
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      className={c('footer')}
    >
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
            <a href="">yeon.me</a>
            <span>Sever Development</span>
          </div>
          <div className={c('thanks_name')}>
            <a href="">vid3d.net</a>
            <span>3D Icon Modeling</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

const Contact = () => {
  const articleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ['0', '1']
  });
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
        transition: { staggerChildren: 0.025, delayChildren: i * 0 }
      })
    },
    mailText: {
      hidden: {
        y: 50,
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

  return (
    <motion.article
      className={c('contact')}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25 }}
      variants={animation.trigger}
      ref={articleRef}
    >
      <div className={c('contact_inner')}>
        <motion.div>
          <motion.div variants={fadeInUp()}>
            <ArticleTitle className={c('title')}>Contact</ArticleTitle>
          </motion.div>
          <motion.div variants={fadeInUp()} className={c('title_sub')}>
            웹 퍼블리싱이 필요한 프로젝트가 있나요?
          </motion.div>
          <div className={c('mail')}>
            <button className={c('mail_button')} onClick={() => alert('복사!')}>
              <span className="screenOut">클릭하여 메일 주소 복사</span>
              <strong className="screenOut">nykim@nykim.net</strong>
              <motion.div
                className={c('mail_animation')}
                variants={animation.mailReveal}
                aria-hidden="true"
              >
                {Array.from('nykim@nykim.net').map((letter, index) => (
                  <motion.div
                    key={index}
                    className={c('mail_address')}
                    variants={animation.mailText}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.div>
                ))}
              </motion.div>
            </button>
          </div>
          <motion.div variants={fadeInUp()}>
            <CustomButton icon="download" className={c('download')}>
              이력서 다운로드
            </CustomButton>
          </motion.div>
        </motion.div>
        <motion.div className={c('contents')} variants={animation.contents}>
          <motion.div className={c('desc')} variants={fadeInUp(40)}>
            <p>
              함께 할 프로젝트가 있다면 메일을 보내주세요! 1~2일 내로 회신을 드릴게요.
              <br />
              저와 나누고 싶은 얘기가 있으신가요? 포트폴리오나 웹 퍼블리싱과 관련이 없는
              내용이여도 좋아요. 궁금한 내용이 있다면 편하게 연락해 주세요 :)
            </p>
          </motion.div>
          <motion.div className={c('desc')} variants={fadeInUp(40)}>
            <p>
              외주 요청 시, 간단한 프로젝트 소개와 희망 착수일/완료일 등을 함께 보내주시면
              더 빠르고 편하게 협업을 시작하실 수 있습니다!
            </p>
            <motion.div className={c('links')} variants={animation.links}>
              <motion.div variants={animation.link}>
                <CustomLink href="mailto:nykim@nykim.net">메일 보내기</CustomLink>
              </motion.div>
              <motion.div variants={animation.link}>
                <CustomLink href="">크몽으로 의뢰하기</CustomLink>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer scrollYProgress={scrollYProgress} />
      <LangSelect className={c('langs')} />
      <Copyright className={c('copy')} />
      <Alphabet type="e" className={c('e')} />
    </motion.article>
  );
};

export default Contact;
