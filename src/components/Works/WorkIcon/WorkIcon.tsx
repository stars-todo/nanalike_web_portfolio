import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './WorkIcon.module.scss';
import { workIcons } from './icons';
import { worksList } from '../WorkItem/WorkItem';
import icon_workboard from '@static/icon_workboard.png';
import icon_email from '@static/icon_email.png';
import icon_interpark from '@static/icon_interpark.png';
import icon_dooin from '@static/icon_dooin.png';
import icon_cosmos from '@static/icon_cosmos.png';
import icon_stars from '@static/icon_stars.png';
const c = classNames.bind(styles);

interface WorkIconProps {
  className?: string;
  id: worksList;
  isOngoing?: boolean;
}

const Image = ({ id }: { id: worksList }) => {
  let image;

  switch (id) {
    case 'workboard':
      image = icon_workboard;
      break;
    case 'email':
      image = icon_email;
      break;
    case 'interpark':
      image = icon_interpark;
      break;
    case 'dooin':
      image = icon_dooin;
      break;
    case 'cosmos':
      image = icon_cosmos;
      break;
    case 'stars':
      image = icon_stars;
      break;
    default:
      image = null;
  }

  return image ? <img src={image} alt="" /> : null;
};

const WorkIcon = ({ id, className, isOngoing, ...props }: WorkIconProps) => {
  return (
    <div
      className={c('work_icon', `${className}`, { isOngoing })}
      style={{
        backgroundColor: `${workIcons[id].color}`
        // backgroundImage: `url(https://source.unsplash.com/random/?${workIcons[id].icon})`
      }}
      {...props}
    >
      <Image id={id} />
      {isOngoing && <span className={c('onGoing')}>Ongoing</span>}
    </div>
  );
};

export default WorkIcon;
