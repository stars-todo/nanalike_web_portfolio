import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomButton.module.scss';
const c = classNames.bind(styles);

interface WrapperProps {
  className?: string;
  children: ReactNode | string;
  href?: string;
}

interface CustomButtonProps extends WrapperProps {
  icon?: 'download' | 'back';
}

const ButtonOrLink = ({ className, href, children }: WrapperProps) => {
  return href ? (
    <a className={c('button_custom', className)} href={href}>
      {children}
    </a>
  ) : (
    <button className={c('button_custom', className)}>{children}</button>
  );
};

const CustomButton = ({ className, children, href, icon }: CustomButtonProps) => {
  return (
    <ButtonOrLink className={className} href={href}>
      {icon && (
        <svg
          aria-hidden="true"
          className={c('icon')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            stroke="#202020"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.125"
            d={
              icon === 'download'
                ? 'm15.5 13.496-5.5 4.25-5.5-4.25M10 17.254v-15'
                : 'M6.504 15.5 2.254 10l4.25-5.5M2.746 10h15'
            }
          />
        </svg>
      )}
      {children}
    </ButtonOrLink>
  );
};

export default CustomButton;
