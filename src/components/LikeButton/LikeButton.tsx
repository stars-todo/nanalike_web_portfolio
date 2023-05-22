import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './LikeButton.module.scss';
const c = classNames.bind(styles);

const LikeButton = () => {
  return (
    <button className={c('btn')}>
      <span aria-label="좋아요 버튼">like</span>
      {/* <span>
        <span aria-label="23번째로 좋아요를 눌렀어요">23th</span>
        <span aria-label="56개의 좋아요가 있어요">56</span>
      </span> */}
    </button>
  );
};

export default LikeButton;
