import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './LangSelect.module.scss';
const c = classNames.bind(styles);

const langs = [
  { name: '한국어', url: 'https://nykim.net' },
  { name: 'English', url: 'https://en.nykim.net' },
  { name: '日本語', url: 'https://ja.nykim.net' }
];

const LangSelect = ({ className }: any) => {
  return (
    <ul className={c('langs', className)}>
      {langs.map((lang) => (
        <li key={lang.name}>
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
  );
};

export default LangSelect;
