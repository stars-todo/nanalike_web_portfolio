import React from 'react';
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
const c = classNames.bind(styles);

export type worksList =
  | 'workboard'
  | 'email'
  | 'interpark'
  | 'dooin'
  | 'cosmos'
  | 'stars';

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
  return (
    <motion.div
      className={c('work_item', `${className}`, { isOngoing })}
      style={style}
      variants={variants}
    >
      <a href={!isOngoing ? `/work/${id}` : undefined} aria-disabled={isOngoing}>
        <div className={c('work_contents')} id="interaction">
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
      </a>
    </motion.div>
  );
};

export default WorkItem;
