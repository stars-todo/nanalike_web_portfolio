import React, { ReactNode, useEffect, useState } from 'react';
import {
  MotionValue,
  Variants,
  motion,
  useMotionValue,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimationControls
} from 'framer-motion';
import classNames from 'classnames/bind';
import * as styles from './WorkItem.module.scss';
import WorkIcon from '../WorkIcon/WorkIcon';
import { worksList } from '@data-types/works';
const c = classNames.bind(styles);

interface WorkItemProps {
  className?: string;
  id: worksList;
  title: string;
  year?: string;
  skills?: string[];
  place?: string;
  isOngoing?: boolean;
  variants?: any;
  style?: any;
}

const WorkItem = ({
  className,
  id,
  title,
  year,
  skills,
  place,
  style,
  variants,
  isOngoing = false
}: WorkItemProps) => {
  function fadeInUp(y = 30, x = 0, duration = 0.7) {
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

  const scrollToTop = () => {
    if (location.pathname.includes(`work`)) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    }
    // history.scrollRestoration = 'manual';
  };

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const onMouseMove = (e: MouseEvent) => {
  //   const mousePos = (e.clientX / window.innerWidth) * 2 - 1;
  //   const mousePos2 = (e.clientX / window.innerWidth) * 2;
  //   setPosition({ x: mousePos, y: mousePos2 });
  // };

  // const rotateY = {
  //   transform: `rotateX(${position.x}deg) rotateY(${position.y}deg)`
  // };

  const LinkOrDiv = ({ children }: { children: ReactNode }) => {
    return isOngoing ? (
      <div>{children}</div>
    ) : (
      <a href={`/work/${id}`} data-cursor="work">
        {children}
      </a>
    );
  };

  return (
    <motion.div
      className={c('work_item', className, { isOngoing })}
      style={style}
      variants={variants}
    >
      <LinkOrDiv>
        <div className={c('work_contents')}>
          <WorkIcon
            className={c('icon')}
            id={id}
            aria-hidden="true"
            isOngoing={isOngoing}
          />
          <div className={c('contents')}>
            <div className={c('title')}>
              <strong className={c('title_text')}>{title}</strong>
              {year && (
                <div className={c('year')}>
                  <span className="screenOut">작업한 연도: </span>
                  {year}
                </div>
              )}
            </div>
            <div className={c('info')}>
              <div className={c('skills')}>
                <span className="screenOut">관련 기술: </span>
                {skills?.map((skill) => (
                  <span key={skill} className={c('skill')}>
                    {skill}
                  </span>
                ))}
              </div>
              {place && (
                <div className={c('place')}>
                  <span className="screenOut">근무처: </span>
                  {place}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={c('bg')}></div>
      </LinkOrDiv>
    </motion.div>
  );
};

export default WorkItem;
