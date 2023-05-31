import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './WorkIcon.module.scss';
import { workIcons } from './icons';
import { worksList } from '../WorkItem/WorkItem';
const c = classNames.bind(styles);

interface WorkIconProps {
  className?: string;
  id: worksList;
  isOngoing?: boolean;
}

const WorkIcon = ({ id, className, isOngoing, ...props }: WorkIconProps) => {
  return (
    <div
      className={c('work_icon', `${className}`, { isOngoing })}
      style={{
        backgroundColor: `${workIcons[id].color}`,
        backgroundImage: `url(https://source.unsplash.com/random/?${workIcons[id].icon})`
      }}
      {...props}
    >
      {isOngoing && <span className={c('onGoing')}>Ongoing</span>}
    </div>
  );
};

export default WorkIcon;
