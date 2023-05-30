import React, { CSSProperties } from 'react';
import classNames from 'classnames/bind';
import * as styles from './Skeleton.module.scss';
const c = classNames.bind(styles);

interface SkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  rx?: number;
  type?: 'rect' | 'squircle';
  style?: CSSProperties;
}

const Skeleton = ({
  className,
  width = '100%',
  height = '100%',
  rx = 4,
  type = 'rect',
  style
}: SkeletonProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="none"
      viewBox={
        type === 'squircle'
          ? '0 0 200 200'
          : width === '100%'
          ? undefined
          : `0 0 ${width} ${height}`
      }
      // viewBox="0 0 100 100"
      style={style}
    >
      {type === 'rect' && (
        <rect width={width} height={height} rx={rx} fill="url(#linear)" />
      )}
      {type === 'squircle' && (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 0C172.943 0 200 27.0572 200 100C200 172.943 172.943 200 100 200C27.0572 200 0 172.943 0 100C0 27.0572 27.0572 0 100 0Z"
          fill="url(#linear)"
        />
      )}
      <defs>
        <linearGradient
          id="linear"
          x1="-14.17%"
          y1="50%"
          x2="100%"
          y2="50%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f4f4f5" />
          <stop offset="100%" stopColor="#eeeff0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Skeleton;
