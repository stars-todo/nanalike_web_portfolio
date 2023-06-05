import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomLink.module.scss';
const c = classNames.bind(styles);

interface CustomLinkProps extends React.ComponentProps<'a'> {
  className?: string;
  cursor?: 'outlink';
  children: ReactNode | string;
  href: string;
}

const CustomLink = ({
  className,
  cursor = 'outlink',
  children,
  href,
  ...props
}: CustomLinkProps) => {
  return (
    <a
      data-cursor={cursor}
      className={c('link_custom', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <svg
        className={c('icon')}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <circle cx="9" cy="9" r="9" fill="currentColor" />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m8 6 3 3-3 3"
        />
      </svg>
      <span>{children}</span>
    </a>
  );
};

export default CustomLink;
