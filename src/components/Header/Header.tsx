import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Header.module.scss';
const c = classNames.bind(styles);

const Header = () => {
  const langs = [
    { name: '한국어', url: 'https://nykim.net' },
    { name: 'English', url: 'https://en.nykim.net' },
    { name: '日本語', url: 'https://ja.nykim.net' }
  ];
  return (
    <header className={c('header')}>
      <div className={c('inner')}>
        <div className={c('line', 'bold')}></div>
        <div className={c('top')}>
          <h1 className={c('title')}>Nana's Web Portfolio</h1>
          <a className={c('mail')} href="mailto:nykim@nykim.net">
            nykim@nykim.net
          </a>
          <span className={c('info')}>Available Now</span>
          <span className={c('circle')}>nanalikenanalikenanalikenanalikenanalike</span>
        </div>
        <div className={c('line')}></div>
        <div className={c('bottom')}>
          <span>나나: 좋아해서 더 잘하는 웹 퍼블리셔</span>
          <ul className={c('langs')}>
            {langs.map((lang) => (
              <li>
                <a
                  className={c(lang.name === '한국어' && 'active')}
                  href={lang.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {lang.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
