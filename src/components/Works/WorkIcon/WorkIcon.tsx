import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './WorkIcon.module.scss';
import { workIcons } from './icons';
import { worksList } from '../WorkItem/WorkItem';
const c = classNames.bind(styles);

interface WorkIconProps {
  className?: string;
  work: worksList;
  isOngoing?: boolean;
}

const WorkIcon = ({ work, className, isOngoing, ...props }: WorkIconProps) => {
  return (
    <div
      className={c('work_icon', `${className}`, { isOngoing })}
      style={{ background: `${workIcons[work].color}` }}
      {...props}
    >
      <h1>{workIcons[work].icon}</h1>
      {isOngoing && <span className={c('onGoing')}>Ongoing</span>}
    </div>
  );
};

export default WorkIcon;
