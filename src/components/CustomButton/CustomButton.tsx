import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomButton.module.scss';
const c = classNames.bind(styles);

interface CustomButtonProps extends React.ComponentProps<'button'> {
  className?: string;
  children: ReactNode | string;
  icon?: 'download' | 'back';
}

const CustomButton = ({ className, children, icon }: CustomButtonProps) => {
  return (
    <button className={c('button_custom', `${className}`)}>
      {icon && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
          <path
            stroke="#202020"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.125"
            d="m15.5 13.496-5.5 4.25-5.5-4.25M10 17.254v-15"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
