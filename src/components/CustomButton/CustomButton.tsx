import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomButton.module.scss';
import { motion } from 'framer-motion';
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
    <motion.a
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      href={href}
      className={c('button_custom', 'back', className)}
      data-cursor="back"
    >
      {children}
    </motion.a>
  ) : (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={c('button_custom', 'download', className)}
      data-cursor="download"
    >
      {children}
    </motion.button>
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
            stroke="currentColor"
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
      <span> {children}</span>
    </ButtonOrLink>
  );
};

export default CustomButton;
