import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './ArticleTitle.module.scss';
const c = classNames.bind(styles);

const ArticleTitle = ({
  className,
  children
}: {
  className?: string;
  children: ReactNode | string;
}) => {
  return <strong className={c('article_title', className)}>{children}</strong>;
};

export default ArticleTitle;
