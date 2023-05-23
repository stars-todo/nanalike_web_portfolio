import React from 'react';
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
  href: worksList;
  title: string;
  year?: string;
  skills?: string[];
  place?: string;
  isOngoing?: boolean;
}

const WorkItem = ({
  className,
  href,
  title,
  year,
  skills,
  place,
  isOngoing = false
}: WorkItemProps) => {
  return (
    <a
      href={`/${href}`}
      target="_blank"
      rel="noopener noreferrer"
      className={c('work_item', `${className}`, { isOngoing })}
    >
      <div id="interaction">
        <WorkIcon
          className={c('icon')}
          work={href}
          aria-hidden="true"
          isOngoing={isOngoing}
        />
        <div className={c('contents')}>
          <div className={c('title')}>
            <strong className={c('title_text')}>{title}</strong>
            {year && (
              <div className={c('year')}>
                <span className="screenOut">작업한 연도</span>
                {year}
              </div>
            )}
          </div>
          <div className={c('info')}>
            <div className={c('skills')}>
              <span className="screenOut">관련 기술</span>
              {skills?.map((skill) => (
                <span key={skill} className={c('skill')}>
                  {skill}
                </span>
              ))}
            </div>
            {place && (
              <div className={c('place')}>
                <span className="screenOut">근무처</span>
                {place}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={c('bg')}></div>
    </a>
  );
};

export default WorkItem;
