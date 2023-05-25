import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Copyright.module.scss';
import NanaText from '@components/Logo/NanaText';
const c = classNames.bind(styles);

const Copyright = ({ className }: { className?: string }) => {
  return (
    <div className={c('copyright', className)}>
      <div className={c('madeBy')} aria-label="Made by Nana with love">
        <span>Made by</span>
        <NanaText className={c('nana')} />
        <span>with</span>
        <span>❤️</span>
      </div>
      <div className={c('text')}>(C) 2023 nykim.net</div>
    </div>
  );
};

export default Copyright;
