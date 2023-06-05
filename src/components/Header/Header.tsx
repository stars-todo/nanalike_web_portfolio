import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Header.module.scss';
import LangSelect from '@components/LangSelect/LangSelect';
const c = classNames.bind(styles);

const Header = () => {
  return (
    <header className={c('header')}>
      <div className={c('inner')}>
        <div className={c('line', 'bold')}></div>
        <div className={c('top')}>
          <h1 className={c('title')}>Nana's Web Portfolio</h1>
          <a className={c('mail')} href="mailto:nykim@nykim.net">
            nykim@nykim.net
          </a>
          <span className={c('status')}>
            <span>Available Now</span>
          </span>
          <span className={c('circle')}>nanalikenanalikenanalikenanalikenanalike</span>
        </div>
        <div className={c('line')}></div>
        <div className={c('bottom')}>
          <span>나나: 좋아해서 더 잘하는 UI 개발자</span>
          {/* TODO: 언어 추가 */}
          {/* <LangSelect className={c('langs')} /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
