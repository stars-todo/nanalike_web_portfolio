import React, { useEffect, useRef, useState } from 'react';
import PageLayout from '@layouts/PageLayout';
import classNames from 'classnames/bind';
import * as styles from './WorkDetail.module.scss';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
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
import { graphql, useStaticQuery } from 'gatsby';
import workboard_icon from '@images/icon_workboard.png';
import comsos_icon from '@images/icon_cosmos.png';
import dooin_icon from '@images/icon_dooin.png';

const c = classNames.bind(styles);

const WorkDetail = ({ id, data, images }: any) => {
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

    if (refHeight - latest <= viewportHeight - 200) {
      setIsScrollOver(true);
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

  console.log(data);
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
            <WorkIcon className={c('thumbnail')} id={id} />
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
                {data?.skills.map((skill, idx) => {
                  return (
                    <li className={c('skills_item')} key={`${idx}`}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp(30, 0.6, 0.2)}>
              {data?.info.map((desc, idx) => {
                return (
                  <p className={c('desc')} key={`${idx}`}>
                    {desc}
                  </p>
                );
              })}
            </motion.div>
            {data?.link && (
              <motion.div variants={animation.link}>
                <CustomLink href={data.link}>웹사이트 바로가기</CustomLink>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
        <div className={c('main', `main_${id}`)}>
          {data?.full && (
            <div className={c('contents', 'full')}>
              <motion.figure initial="hidden" whileInView="visible" variants={fadeInUp()}>
                {images[0]?.childImageSharp ? (
                  <GatsbyImage
                    className={c('shot')}
                    image={getImage(images[0]?.childImageSharp.gatsbyImageData)!}
                    alt="작업물 스크린샷"
                  />
                ) : (
                  <img
                    className={c('shot')}
                    src={images[0].publicURL}
                    alt="작업물 스크린샷"
                  />
                )}

                <figcaption className={c('contents_desc')}>
                  {data.full.map((desc, idx) => {
                    return (
                      <motion.p
                        key={`${idx}`}
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
          )}

          <div className={c('flex')}>
            {images?.slice(1).map((image, index) => (
              <div className={c('contents')} key={`${index}`}>
                <motion.figure
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp()}
                >
                  {image?.childImageSharp ? (
                    <GatsbyImage
                      className={c('shot')}
                      image={getImage(image?.childImageSharp.gatsbyImageData)!}
                      alt="작업물 스크린샷"
                    />
                  ) : (
                    <img
                      className={c('shot')}
                      src={image.publicURL}
                      alt="작업물 스크린샷"
                    />
                  )}
                  {data?.flex && (
                    <figcaption className={c('contents_desc')}>
                      <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp()}
                      >
                        {data?.flex[index]}
                      </motion.p>
                    </figcaption>
                  )}
                </motion.figure>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animation.others}
          className={c('others')}
        >
          <strong>Next</strong>
          <ul className={c('others_list')}>
            {worksData.map((work) => {
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
      </article>
      <footer className={c('work_footer')}>
        <motion.div initial="hidden" animate={controls} className={c('inner')}>
          <div className={c('footer_title')}>똑똑, 함께 일할 사람을 찾고 계신가요?</div>
          <MailAddress size="small" />
          <Copyright className={c('copy')} />
        </motion.div>
      </footer>
    </>
  );
};

export default WorkDetail;
