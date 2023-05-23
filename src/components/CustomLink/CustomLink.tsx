import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomLink.module.scss';
const c = classNames.bind(styles);

interface CustomLinkProps extends React.ComponentProps<'a'> {
  className?: string;
  children: ReactNode | string;
  href: string;
}

const CustomLink = ({ className, children, href, ...props }: CustomLinkProps) => {
  return (
    <a
      className={c('link_custom', `${className}`)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
        <circle cx="9" cy="9" r="9" fill="#202020" />
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m8 6 3 3-3 3"
        />
      </svg>
      {children}
    </a>
  );
};

export default CustomLink;
