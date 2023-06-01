import React, { useEffect, useRef, useState } from 'react';
import PageLayout from '@layouts/PageLayout';
import classNames from 'classnames/bind';
import * as styles from './WorkDetail.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import CustomLink from '@components/CustomLink/CustomLink';
import WorkIcon from '@components/Works/WorkIcon/WorkIcon';
import MailAddress from '@components/MailAddress/MailAddress';
import Copyright from '@components/Copyright/Copyright';
import CustomButton from '@components/CustomButton/CustomButton';
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll
} from 'framer-motion';
import worksData from '@data/works.json';

const c = classNames.bind(styles);

const myWorks = [
  {
    id: 'workboard',
    title: '카카오워크 워크보드',
    year: '23-22',
    skills: ['React', 'TypeScript'],
    place: '카카오엔터프라이즈'
  },
  {
    id: 'email',
    title: '이메일 템플릿',
    year: '23-22',
    skills: ['Email', 'Gatsby'],
    place: '카카오엔터프라이즈'
  },
  {
    id: 'interpark',
    title: '인터파크 개편 & 유지보수',
    year: '21-20',
    skills: ['Cross-browsing', 'jQuery']
  },
  {
    id: 'dooin',
    title: '두인경매 지도 검색',
    year: '21',
    skills: ['Markup', 'jQuery']
  },
  {
    id: 'cosmos',
    title: '코스모스랩 기업 홈페이지',
    year: '21',
    skills: ['Scroll Interaction'],
    place: '블록오디세이'
  },
  {
    id: 'stars',
    title: '별별할일',
    year: '23',
    skills: ['Next.js', 'UX Design'],
    isOngoing: true
  }
];

const WorkDetail = ({ id, data }: any) => {
  const { scrollYProgress, scrollY } = useScroll({
    offset: ['0', '1']
  });

  const articleRef = useRef<HTMLDivElement>(null);
  const [isScrollOver, setIsScrollOver] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const refRect = articleRef.current?.getBoundingClientRect();
    const retOffset = articleRef?.current?.offsetTop || 0;
    const refHeight = refRect?.height || 0;
    const viewportHeight = typeof window !== `undefined` ? window.innerHeight : 0;
    console.log('latest', latest);
    console.log('refHeight', refHeight);
    console.log('viewportHeight', viewportHeight);

    if (refHeight - latest <= viewportHeight - 200) {
      setIsScrollOver(true);
      console.log('NOW!!!!');
    } else {
      setIsScrollOver(false);
    }
  });

  function fadeInUp(y = 30, duration = 0.6, delay = 0) {
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
          duration: duration,
          delay: delay
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
          staggerChildren: 0.5
        }
      }
    },
    link: {
      hidden: {
        opacity: 0,
        x: -30
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.3
        }
      }
    },
    button: {
      hidden: {
        opacity: 0,
        x: -30
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          ease: 'easeInOut',
          duration: 0.5
        }
      }
    },
    others: {
      hidden: { opacity: 0, transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.12
          // ease: 'linear'
        }
      }
    },
    othersText: {
      hidden: { opacity: 0, x: 0, transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.85,
          ease: 'linear'
        }
      }
    },
    othersLines: {
      hidden: { opacity: 0, x: '-70%', transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          ease: 'linear'
        }
      }
    }
  };

  const controls = useAnimationControls();

  useEffect(() => {
    if (isScrollOver) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isScrollOver]);

  return (
    <>
      <article className={c('work_detail')} ref={articleRef}>
        <div className={c('btn_back')}>
          <CustomButton icon="back" href="/">
            Go Home
          </CustomButton>
        </div>
        <motion.div initial="hidden" whileInView="visible" className={c('info')}>
          <motion.div className={c('thumbnail_wrapper')} variants={fadeInUp()}>
            <StaticImage
              className={c('thumbnail')}
              alt=""
              src="https://source.unsplash.com/random/?cat"
            />
          </motion.div>
          <motion.div
            className={c('summary')}
            variants={animation.trigger}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div variants={fadeInUp()}>
              <ArticleTitle>Work Detail</ArticleTitle>
              <h2 className={c('work_title')}>{data?.title}</h2>
            </motion.div>
            <motion.div variants={fadeInUp(30, 0.6, 0.1)}>
              <ul className={c('skills')}>
                {data?.skills.map((skill) => {
                  return <li className={c('skills_item')}>{skill}</li>;
                })}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp(30, 0.6, 0.2)}>
              {data?.info.map((desc) => {
                return <p className={c('desc')}>{desc}</p>;
              })}
            </motion.div>
            {data?.link && (
              <motion.div variants={animation.link}>
                <CustomLink href={data.link}>웹사이트 바로가기</CustomLink>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className={c('main')}>
          {data?.full && (
            <div className={c('contents', 'full')}>
              {data?.full.map((contents) => (
                <motion.figure
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp()}
                >
                  <img
                    className={c('shot')}
                    alt="작업한 내용 스크린샷"
                    src={contents.img}
                  />
                  <figcaption className={c('contents_desc')}>
                    {contents.desc.map((desc) => {
                      return (
                        <motion.p
                          initial="hidden"
                          whileInView="visible"
                          variants={fadeInUp()}
                        >
                          {desc}
                        </motion.p>
                      );
                    })}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          )}
          {data?.flex && (
            <div className={c('flex')}>
              {data?.flex.map((contents) => (
                <div className={c('contents')}>
                  <motion.figure
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp()}
                  >
                    <img
                      className={c('shot')}
                      alt="작업한 내용 스크린샷"
                      src={contents.img}
                    />
                    <figcaption className={c('contents_desc')}>
                      {contents.desc.map((desc) => {
                        return (
                          <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp()}
                          >
                            {desc}
                          </motion.p>
                        );
                      })}
                    </figcaption>
                  </motion.figure>
                </div>
              ))}
            </div>
          )}
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animation.others}
          className={c('others')}
        >
          <strong>Next</strong>
          <ul className={c('others_list')}>
            {worksData.map((work, index) => {
              if (work.id !== id && !work.isOngoing) {
                return (
                  <motion.li className={c('others_item')} key={work.id}>
                    <a href={`/work/${work.id}`}>
                      <motion.div variants={animation.othersText} className={c('name')}>
                        {work.title}
                      </motion.div>
                    </a>
                    <motion.div
                      variants={animation.othersLines}
                      className={c('line')}
                    ></motion.div>
                  </motion.li>
                );
              }
            })}
          </ul>
          <motion.div variants={animation.button}>
            <CustomButton className={c('go_home')} icon="back" href="/">
              Go Home
            </CustomButton>
          </motion.div>
        </motion.div>
        <div className={c('btn_back')}></div>
        {/* <ul className={c('slide')}>
          {[...myWorks, ...myWorks].map((work, index) => {
            if (work?.id !== 'workboard') {
              return (
                <li className={c('slide_item')} key={work.id}>
                  <a href={`/work/${work.id}`} target="_blank" rel="noopener noreferrer">
                    <WorkIcon id={work.id as worksList} />
                    <span className={c('slide_name')}>{work.title}</span>
                    <span className={c('slide_bg')}></span>
                  </a>
                </li>
              );
            }
          })}
        </ul> */}
      </article>
      <footer className={c('work_footer')}>
        <motion.div
          initial="hidden"
          // whileInView="visible"
          animate={controls}
          className={c('inner')}
        >
          <div className={c('footer_title')}>웹 퍼블리싱이 필요한 프로젝트가 있나요?</div>
          <MailAddress size="small" />
          <Copyright className={c('copy')} />
        </motion.div>
      </footer>
    </>
  );
};

export default WorkDetail;
