import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Main.module.scss';
const c = classNames.bind(styles);

const Main = () => {
  return (
    <article className={c('main')}>
      <div className={c('title')}>
        <strong>좋아하니까,나나답게</strong>
        <div aria-label="나나라이크 로고">nanalike</div>
      </div>
      <p>
        탄탄한 코드 위에 감각적인 인터페이스를 그려내는 웹 퍼블리셔 나나입니다. 사용하기
        쉬운 UI와 기억에 남는 UX를 개발하는 일을 해요. 좋아하면 더 잘한다는 마음으로,
        오늘도 즐겁게 일하고 있어요!
      </p>
      <div>
        <span>Let's Scroll Down</span>
      </div>
    </article>
  );
};

export default Main;
