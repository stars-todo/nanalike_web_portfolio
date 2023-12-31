import React, { useEffect, useRef, useState } from 'react';
import useBlogData from '@hooks/useBlogData';
import classNames from 'classnames/bind';
import * as styles from './Blog.module.scss';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import CustomLink from '@components/CustomLink/CustomLink';
import Alphabet from '@components/Alphabet/Alphabet';
import {
  Variants,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform
} from 'framer-motion';
import Skeleton from '@components/Skeleton/Skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const c = classNames.bind(styles);

const TextBig = ({ varaints, children }: { varaints?: Variants; children: string }) => {
  const textReveal: Variants = {
    hidden: {
      opacity: 0
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: i * 0 }
    })
  };
  const svg = {
    hidden: {
      y: 70,
      skewY: 10,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    },
    visible: {
      y: 0,
      skewY: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  };
  return (
    <motion.strong className={c('text_big')} variants={textReveal}>
      <span className="screenOut">{children}</span>
      <div className={c('text_big_svg', 'svg_1')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 395 74">
          <motion.path
            variants={svg}
            fill="#000"
            d="M31.064 58.024c-5.163 0-7.979-2.259-8.448-6.776-2.581 4.517-5.837 6.776-9.768 6.776-3.93 0-7.07-1.173-9.416-3.52C1.144 52.099 0 48.754 0 44.472c0-6.688 1.643-11.939 4.928-15.752C8.213 24.907 12.467 23 17.688 23c4.283 0 7.128 2.024 8.536 6.072.293-1.76.616-3.52.968-5.28 4.341 0 7.568-.176 9.68-.528L38.016 23l-6.072 33.264c1.76-.176 3.227-.997 4.4-2.464l1.32 1.056c-1.76 2.112-3.96 3.168-6.6 3.168ZM9.944 48.96c0 2.64.323 4.488.968 5.544.704.997 1.76 1.496 3.168 1.496 1.408 0 2.845-.763 4.312-2.288 1.936-1.995 3.49-4.517 4.664-7.568.176-.763.499-2.581.968-5.456.528-2.933.968-5.339 1.32-7.216-.176-2.23-.792-4.165-1.848-5.808-1.056-1.643-2.376-2.464-3.96-2.464-2.875 0-5.192 2.581-6.952 7.744-1.76 5.104-2.64 10.443-2.64 16.016Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M43.088 27.168c1.76-2.112 3.96-3.168 6.6-3.168 2.699 0 4.781.675 6.248 2.024 1.467 1.35 2.2 3.256 2.2 5.72v.528C60.776 26.757 64.208 24 68.432 24c4.517 0 6.776 2.347 6.776 7.04 0 1.936-.645 3.99-1.936 6.16a194.231 194.231 0 0 1-3.872 6.248c-1.29 1.936-1.936 3.667-1.936 5.192h-2.112c0-2.17 1.261-5.104 3.784-8.8 2.523-3.696 3.784-6.541 3.784-8.536 0-2.053-.41-3.432-1.232-4.136-.763-.763-1.936-1.144-3.52-1.144-1.525 0-3.05.675-4.576 2.024-1.467 1.35-2.699 3.05-3.696 5.104-1.584 3.05-2.64 5.544-3.168 7.48v.088L53.56 58.232H43l5.808-32.472c-1.76.176-3.227.997-4.4 2.464l-1.32-1.056Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="m82.664 23.816 2.376-13.024c4.341 0 7.568-.176 9.68-.528L95.864 10c-.821 4.107-1.73 8.712-2.728 13.816h10.912l-.176 1.584h-11c-2.933 15.136-4.4 24.259-4.4 27.368 0 1.877.997 2.816 2.992 2.816s3.813-1.261 5.456-3.784a26.014 26.014 0 0 0 3.52-8.184l1.584.528c-2.17 9.27-6.659 13.904-13.464 13.904-2.816 0-5.163-.763-7.04-2.288-1.877-1.584-2.816-3.755-2.816-6.512 0-2.816 1.203-10.765 3.608-23.848H78l.176-1.584h4.488Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M122.048 55.216c-1.76 2.112-3.96 3.168-6.6 3.168-2.64 0-4.723-.675-6.248-2.024-1.467-1.35-2.2-3.11-2.2-5.28 0-.763.469-3.96 1.408-9.592l2.904-15.752h-3.696l.176-1.584h3.784c4.341 0 7.539-.176 9.592-.528l1.232-.264-6.072 33.264c1.76-.176 3.227-.997 4.4-2.464l1.32 1.056Zm-7.744-40.304c-1.232-1.232-1.848-2.728-1.848-4.488 0-1.76.616-3.256 1.848-4.488C115.536 4.646 117.032 4 118.792 4c1.76 0 3.256.645 4.488 1.936 1.291 1.232 1.936 2.728 1.936 4.488 0 1.76-.645 3.256-1.936 4.488-1.232 1.232-2.728 1.848-4.488 1.848-1.76 0-3.256-.616-4.488-1.848Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M148.296 38.84c-1.232-1.232-1.848-2.728-1.848-4.488 0-1.76.616-3.256 1.848-4.488 1.232-1.29 2.728-1.936 4.488-1.936.528 0 1.203.117 2.024.352-1.115-2.053-3.197-3.08-6.248-3.08s-5.749 1.936-8.096 5.808c-2.347 3.872-3.52 9.621-3.52 17.248 0 2.64.587 4.605 1.76 5.896 1.232 1.232 2.757 1.848 4.576 1.848 1.819 0 3.461-.352 4.928-1.056 1.525-.704 2.728-1.525 3.608-2.464a21.976 21.976 0 0 0 2.288-3.08c1.173-1.936 1.76-3.168 1.76-3.696l1.584.704c-.176.939-.704 2.2-1.584 3.784-.88 1.525-1.848 2.787-2.904 3.784-1.056.997-2.611 1.936-4.664 2.816-2.053.821-4.341 1.232-6.864 1.232-4.752 0-8.36-1.115-10.824-3.344-2.405-2.288-3.608-5.397-3.608-9.328 0-6.981 1.731-12.437 5.192-16.368 3.52-3.99 8.272-5.984 14.256-5.984 4.048 0 7.157 1.027 9.328 3.08 2.171 2.053 3.256 4.752 3.256 8.096 0 2.112-.645 3.725-1.936 4.84-1.232 1.115-2.699 1.672-4.4 1.672-1.701 0-3.168-.616-4.4-1.848Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M178.84 53.856c-.763.997-1.819 1.907-3.168 2.728-1.291.821-2.992 1.232-5.104 1.232s-3.901-.675-5.368-2.024c-1.467-1.35-2.2-3.256-2.2-5.72 0-.47.059-1.232.176-2.288l5.72-31.68c1.056-5.808 2.493-9.944 4.312-12.408C175.085 1.232 177.549 0 180.6 0c2.112 0 3.843.792 5.192 2.376 1.408 1.584 2.112 3.99 2.112 7.216 0 3.227-1.261 7.832-3.784 13.816-2.464 5.984-3.696 10.355-3.696 13.112h-1.584c0-3.11 1.232-7.539 3.696-13.288 2.464-5.808 3.696-10.443 3.696-13.904 0-2.112-.499-3.93-1.496-5.456-.939-1.525-2.112-2.288-3.52-2.288-.059 1.525-1.085 8.39-3.08 20.592-1.936 12.144-3.872 23.437-5.808 33.88 1.643 0 3.168-.85 4.576-2.552 1.408-1.701 2.405-3.403 2.992-5.104l.968-2.64 1.584.704c-.176.821-.645 2.024-1.408 3.608-.704 1.525-1.437 2.787-2.2 3.784Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M206.096 23c7.451 0 11.176 2.963 11.176 8.888 0 3.696-1.76 6.512-5.28 8.448-3.461 1.877-8.419 2.845-14.872 2.904-.117 2.112-.176 3.784-.176 5.016 0 2.64.587 4.605 1.76 5.896 1.232 1.232 2.757 1.848 4.576 1.848 1.819 0 3.461-.352 4.928-1.056 1.525-.704 2.728-1.525 3.608-2.464a21.976 21.976 0 0 0 2.288-3.08c1.173-1.936 1.76-3.168 1.76-3.696l1.584.704c-.176.939-.704 2.2-1.584 3.784-.88 1.525-1.848 2.787-2.904 3.784-1.056.997-2.611 1.936-4.664 2.816-2.053.821-4.341 1.232-6.864 1.232-4.752 0-8.36-1.115-10.824-3.344-2.405-2.288-3.608-5.397-3.608-9.328 0-6.981 1.731-12.437 5.192-16.368 3.461-3.99 8.096-5.984 13.904-5.984Zm8.976 8.888c0-1.936-.587-3.52-1.76-4.752-1.115-1.29-2.816-1.936-5.104-1.936-2.229 0-4.429 1.35-6.6 4.048-2.112 2.699-3.52 6.688-4.224 11.968 11.792-.059 17.688-3.168 17.688-9.328Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M230.384 55.784c5.808 0 8.712-4.283 8.712-12.848 0-2.112-.323-4.605-.968-7.48-.587-2.875-.939-4.664-1.056-5.368-3.579 3.696-7.597 5.925-12.056 6.688v-2.112c4.224-.939 8.184-3.344 11.88-7.216v-.352c0-1.408.205-2.787.616-4.136.411-1.35.821-2.347 1.232-2.992l.616-.968h2.112c0 2.581.411 4.957 1.232 7.128.821 2.112 1.731 3.843 2.728 5.192.997 1.29 1.907 3.021 2.728 5.192.821 2.112 1.232 4.459 1.232 7.04 0 4.165-1.584 7.627-4.752 10.384-3.109 2.757-6.864 4.136-11.264 4.136-4.4 0-7.744-.997-10.032-2.992-2.229-1.995-3.344-4.283-3.344-6.864 0-2.64.645-4.517 1.936-5.632 1.291-1.173 2.816-1.76 4.576-1.76 1.76 0 3.197.587 4.312 1.76 1.173 1.115 1.76 2.581 1.76 4.4 0 1.76-.557 3.256-1.672 4.488-1.115 1.232-2.552 1.848-4.312 1.848a8.633 8.633 0 0 1-2.376-.352c1.291 1.877 3.344 2.816 6.16 2.816Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M277.808 24.76c-1.408 0-2.875.821-4.4 2.464l-1.32-1.056c.411-.821 1.32-1.555 2.728-2.2 1.408-.645 2.963-.968 4.664-.968 5.339 0 8.008 2.405 8.008 7.216 0 2.053-.557 5.427-1.672 10.12-1.115 4.635-1.672 7.773-1.672 9.416 0 2.816 1.173 4.224 3.52 4.224 1.936 0 3.813-1.32 5.632-3.96 1.877-2.64 3.403-6.19 4.576-10.648l2.904-15.576c4.341 0 7.509-.176 9.504-.528l1.144-.264-5.544 31.152c-1.056 6.043-3.52 10.765-7.392 14.168-3.813 3.403-8.771 5.104-14.872 5.104-3.696 0-6.571-.645-8.624-1.936-1.995-1.232-2.992-2.875-2.992-4.928 0-1.995.616-3.608 1.848-4.84 1.232-1.173 2.963-1.76 5.192-1.76 2.288 0 4.4.352 6.336 1.056 1.936.763 3.344 1.203 4.224 1.32l-.176 1.584c-.997-.117-2.435-.528-4.312-1.232-1.877-.704-3.755-1.056-5.632-1.056-1.819 0-3.227.41-4.224 1.232-.939.821-1.408 1.995-1.408 3.52 0 1.584.851 2.845 2.552 3.784 1.701.997 3.813 1.496 6.336 1.496 6.101 0 9.856-3.667 11.264-11l2.2-12.144c-2.464 5.397-6.189 8.096-11.176 8.096-3.403 0-6.043-.968-7.92-2.904-1.819-1.936-2.728-4.664-2.728-8.184 0-1.819.528-5.075 1.584-9.768 1.115-4.752 1.731-8.419 1.848-11Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M329.816 58.024c-4.517 0-7.949-1.115-10.296-3.344-2.347-2.288-3.52-5.133-3.52-8.536 0-3.461.293-6.395.88-8.8a24.964 24.964 0 0 1 3.08-7.04c1.408-2.288 3.52-4.077 6.336-5.368 2.875-1.29 6.424-1.936 10.648-1.936 4.283 0 7.597 1.144 9.944 3.432 2.405 2.23 3.608 5.31 3.608 9.24 0 6.688-1.789 12.085-5.368 16.192-3.52 4.107-8.624 6.16-15.312 6.16Zm-3.872-9.064c0 4.693 1.349 7.04 4.048 7.04 2.757 0 5.192-2.347 7.304-7.04 2.171-4.752 3.256-10.384 3.256-16.896 0-4.928-1.349-7.392-4.048-7.392-2.64 0-5.075 2.259-7.304 6.776-2.171 4.459-3.256 10.296-3.256 17.512Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M360.72 24.76c-1.408 0-2.875.821-4.4 2.464L355 26.168c.411-.821 1.32-1.555 2.728-2.2 1.408-.645 2.963-.968 4.664-.968 5.339 0 8.008 2.405 8.008 7.216 0 2.053-.528 5.72-1.584 11s-1.584 8.741-1.584 10.384c0 2.523 1.203 3.784 3.608 3.784 1.701 0 3.344-.997 4.928-2.992 1.643-1.995 3.051-4.752 4.224-8.272l3.696-20.328c4.341 0 7.509-.176 9.504-.528l1.144-.264-5.896 33.264c1.76-.176 3.227-.997 4.4-2.464l1.32 1.056c-1.76 2.112-3.96 3.168-6.6 3.168-2.64 0-4.693-.645-6.16-1.936-1.467-1.29-2.229-3.11-2.288-5.456-2.464 4.928-6.101 7.392-10.912 7.392-3.461 0-6.16-.968-8.096-2.904-1.936-1.995-2.904-4.723-2.904-8.184 0-1.819.557-5.31 1.672-10.472 1.115-5.221 1.731-9.123 1.848-11.704Z"
          />
        </svg>
      </div>
      <div className={c('text_big_svg', 'svg_2')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 74">
          <motion.path
            variants={svg}
            fill="#000"
            d="M33 56.264c1.408 0 2.875-.821 4.4-2.464l1.32 1.056c-.41.821-1.32 1.555-2.728 2.2-1.408.645-2.963.968-4.664.968-5.339 0-8.008-2.405-8.008-7.216 0-2.053.528-5.72 1.584-11s1.584-8.741 1.584-10.384c0-2.523-1.203-3.784-3.608-3.784-3.637 0-6.688 4.664-9.152 13.992l-3.168 17.6H0L5.808 24.76c-1.76.176-3.227.997-4.4 2.464l-1.32-1.056C1.848 24.056 4.048 23 6.688 23c2.699 0 4.781.675 6.248 2.024 1.467 1.35 2.2 3.256 2.2 5.72v.264C17.424 25.669 20.886 23 25.52 23c3.285 0 5.867.91 7.744 2.728 1.936 1.76 2.992 4.253 3.168 7.48 1.115-3.227 2.523-5.72 4.224-7.48C42.357 23.909 44.821 23 48.048 23c3.227 0 5.808.997 7.744 2.992 1.936 1.936 2.904 4.635 2.904 8.096 0 1.819-.557 5.339-1.672 10.56-1.115 5.163-1.73 9.035-1.848 11.616 1.408 0 2.875-.821 4.4-2.464l1.32 1.056c-.41.821-1.32 1.555-2.728 2.2-1.408.645-2.963.968-4.664.968-5.339 0-8.008-2.405-8.008-7.216 0-2.053.528-5.72 1.584-11s1.584-8.741 1.584-10.384c0-2.523-1.203-3.784-3.608-3.784-4.224 0-7.627 6.277-10.208 18.832-1.115 5.339-1.73 9.27-1.848 11.792Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M96.064 58.024c-5.163 0-7.979-2.259-8.448-6.776-2.581 4.517-5.837 6.776-9.768 6.776-3.93 0-7.07-1.173-9.416-3.52C66.144 52.099 65 48.754 65 44.472c0-6.688 1.643-11.939 4.928-15.752 3.285-3.813 7.539-5.72 12.76-5.72 4.283 0 7.128 2.024 8.536 6.072.293-1.76.616-3.52.968-5.28 4.341 0 7.568-.176 9.68-.528l1.144-.264-6.072 33.264c1.76-.176 3.227-.997 4.4-2.464l1.32 1.056c-1.76 2.112-3.96 3.168-6.6 3.168Zm-21.12-9.064c0 2.64.323 4.488.968 5.544.704.997 1.76 1.496 3.168 1.496 1.408 0 2.845-.763 4.312-2.288 1.936-1.995 3.49-4.517 4.664-7.568.176-.763.499-2.581.968-5.456.528-2.933.968-5.339 1.32-7.216-.176-2.23-.792-4.165-1.848-5.808-1.056-1.643-2.376-2.464-3.96-2.464-2.875 0-5.192 2.581-6.952 7.744-1.76 5.104-2.64 10.443-2.64 16.016Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M112.808 24.76c-1.408 0-2.875.821-4.4 2.464l-1.32-1.056c.411-.821 1.32-1.555 2.728-2.2 1.408-.645 2.963-.968 4.664-.968 5.339 0 8.008 2.405 8.008 7.216 0 2.053-.557 5.427-1.672 10.12-1.115 4.635-1.672 7.773-1.672 9.416 0 2.816 1.173 4.224 3.52 4.224 1.936 0 3.813-1.32 5.632-3.96 1.877-2.64 3.403-6.19 4.576-10.648l2.904-15.576c4.341 0 7.509-.176 9.504-.528l1.144-.264-5.544 31.152c-1.056 6.043-3.52 10.765-7.392 14.168-3.813 3.403-8.771 5.104-14.872 5.104-3.696 0-6.571-.645-8.624-1.936-1.995-1.232-2.992-2.875-2.992-4.928 0-1.995.616-3.608 1.848-4.84 1.232-1.173 2.963-1.76 5.192-1.76 2.288 0 4.4.352 6.336 1.056 1.936.763 3.344 1.203 4.224 1.32l-.176 1.584c-.997-.117-2.435-.528-4.312-1.232-1.877-.704-3.755-1.056-5.632-1.056-1.819 0-3.227.41-4.224 1.232-.939.821-1.408 1.995-1.408 3.52 0 1.584.851 2.845 2.552 3.784 1.701.997 3.813 1.496 6.336 1.496 6.101 0 9.856-3.667 11.264-11l2.2-12.144c-2.464 5.397-6.189 8.096-11.176 8.096-3.403 0-6.043-.968-7.92-2.904-1.819-1.936-2.728-4.664-2.728-8.184 0-1.819.528-5.075 1.584-9.768 1.115-4.752 1.731-8.419 1.848-11Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M184.84 53.856c-.763.997-1.819 1.907-3.168 2.728-1.291.821-2.992 1.232-5.104 1.232s-3.901-.675-5.368-2.024c-1.467-1.35-2.2-3.256-2.2-5.72 0-.47.059-1.232.176-2.288l5.72-31.68c1.056-5.808 2.493-9.944 4.312-12.408C181.085 1.232 183.549 0 186.6 0c2.112 0 3.843.792 5.192 2.376 1.408 1.584 2.112 3.99 2.112 7.216 0 3.227-1.261 7.832-3.784 13.816-2.464 5.984-3.696 10.355-3.696 13.112h-1.584c0-3.11 1.232-7.539 3.696-13.288 2.464-5.808 3.696-10.443 3.696-13.904 0-2.112-.499-3.93-1.496-5.456-.939-1.525-2.112-2.288-3.52-2.288-.059 1.525-1.085 8.39-3.08 20.592-1.936 12.144-3.872 23.437-5.808 33.88 1.643 0 3.168-.85 4.576-2.552 1.408-1.701 2.405-3.403 2.992-5.104l.968-2.64 1.584.704c-.176.821-.645 2.024-1.408 3.608-.704 1.525-1.437 2.787-2.2 3.784Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M209.048 55.216c-1.76 2.112-3.96 3.168-6.6 3.168-2.64 0-4.723-.675-6.248-2.024-1.467-1.35-2.2-3.11-2.2-5.28 0-.763.469-3.96 1.408-9.592l2.904-15.752h-3.696l.176-1.584h3.784c4.341 0 7.539-.176 9.592-.528l1.232-.264-6.072 33.264c1.76-.176 3.227-.997 4.4-2.464l1.32 1.056Zm-7.744-40.304c-1.232-1.232-1.848-2.728-1.848-4.488 0-1.76.616-3.256 1.848-4.488C202.536 4.646 204.032 4 205.792 4c1.76 0 3.256.645 4.488 1.936 1.291 1.232 1.936 2.728 1.936 4.488 0 1.76-.645 3.256-1.936 4.488-1.232 1.232-2.728 1.848-4.488 1.848-1.76 0-3.256-.616-4.488-1.848Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="m226.64 40.04-3.168 16.984H213l9.944-55.264c-1.76.176-3.227.997-4.4 2.464l-1.32-1.056c1.76-2.112 3.96-3.168 6.6-3.168 2.699 0 4.781.675 6.248 2.024 1.467 1.35 2.2 3.256 2.2 5.72 0 .47-.059 1.232-.176 2.288a9729.205 9729.205 0 0 1-4.4 24.112c1.467-3.579 3.579-6.365 6.336-8.36 2.757-1.995 5.691-2.992 8.8-2.992 3.109 0 5.28.616 6.512 1.848 1.291 1.232 1.936 2.787 1.936 4.664 0 1.819-.557 3.315-1.672 4.488-1.115 1.173-2.581 1.76-4.4 1.76-1.76 0-3.139-.499-4.136-1.496-.939-1.056-1.408-2.581-1.408-4.576 0-2.053.704-3.608 2.112-4.664-5.632.645-10.12 4.81-13.464 12.496a15.267 15.267 0 0 1 2.112-.176c3.109 0 5.544.616 7.304 1.848 1.819 1.232 2.992 2.757 3.52 4.576.528 1.76.909 3.55 1.144 5.368.235 1.76.616 3.256 1.144 4.488.528 1.232 1.467 1.848 2.816 1.848 1.349 0 2.405-.557 3.168-1.672l1.32 1.056c-.411.821-1.32 1.555-2.728 2.2-1.408.645-3.227.968-5.456.968-2.171 0-4.107-.557-5.808-1.672-1.643-1.115-2.787-2.493-3.432-4.136a44.907 44.907 0 0 1-1.584-5.016c-1.115-4.224-2.845-6.541-5.192-6.952Z"
          />
          <motion.path
            variants={svg}
            fill="#000"
            d="M274.096 23c7.451 0 11.176 2.963 11.176 8.888 0 3.696-1.76 6.512-5.28 8.448-3.461 1.877-8.419 2.845-14.872 2.904-.117 2.112-.176 3.784-.176 5.016 0 2.64.587 4.605 1.76 5.896 1.232 1.232 2.757 1.848 4.576 1.848 1.819 0 3.461-.352 4.928-1.056 1.525-.704 2.728-1.525 3.608-2.464a21.976 21.976 0 0 0 2.288-3.08c1.173-1.936 1.76-3.168 1.76-3.696l1.584.704c-.176.939-.704 2.2-1.584 3.784-.88 1.525-1.848 2.787-2.904 3.784-1.056.997-2.611 1.936-4.664 2.816-2.053.821-4.341 1.232-6.864 1.232-4.752 0-8.36-1.115-10.824-3.344-2.405-2.288-3.608-5.397-3.608-9.328 0-6.981 1.731-12.437 5.192-16.368 3.461-3.99 8.096-5.984 13.904-5.984Zm8.976 8.888c0-1.936-.587-3.52-1.76-4.752-1.115-1.29-2.816-1.936-5.104-1.936-2.229 0-4.429 1.35-6.6 4.048-2.112 2.699-3.52 6.688-4.224 11.968 11.792-.059 17.688-3.168 17.688-9.328Z"
          />
        </svg>
      </div>
    </motion.strong>
  );
};

const PostItem = ({
  idx,
  hover,
  setHover,
  data,
  isLoading,
  className,
  url,
  title,
  date,
  desc
}: any) => {
  return (
    <div className={c('post_item', isLoading, className)}>
      <a
        href={data && data.link[0]}
        className={c('link', { on: hover === idx + 1 })}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="outlink"
        onMouseOver={() => setHover(idx + 1)}
        onMouseLeave={() => setHover(null)}
      >
        {!data ? (
          <Skeleton className={c('thumbnail_mock')} width="100%" height="220" />
        ) : (
          // <img
          //   className={c('thumbnail')}
          //   src={getImg(data.description[0])}
          //   alt=""
          //   onError={() => {}}
          // />
          <LazyLoadImage
            wrapperClassName={c('thumbnail')}
            className={c('thumbnail_img')}
            src={getImg(data.description[0])}
            alt={data.title[0]}
            effect="blur"
          />
        )}
        <div className={c('text')}>
          <span className={c('date')}>
            {!data ? <Skeleton width="100%" height="20" /> : getDate(data.pubDate[0])}
          </span>
          <strong className={c('title')}>
            {!data ? <Skeleton width="100%" height="30" /> : data.title[0]}
          </strong>
          <p className={c('desc')}>
            {!data ? (
              <Skeleton width="100%" height="80" />
            ) : (
              removeTag(data.description[0])
            )}
          </p>
        </div>
      </a>
      <div className={c('post_line')}></div>
    </div>
  );
};

function removeTags(str: any) {
  return str.replace(/<[^>]*>/g, '');
}

function removeTag(contents: any) {
  const sentencesToRemove = [
    '<div class="revenue_unit_info">반응형</div>',
    /<figcaption[^>]*>.*?<\/figcaption>/gi,
    /<script[^>]*>.*?<\/script>/gi,
    /<blockquote[^>]*>.*?<\/blockquote>/gi,
    '&nbsp;',
    '프롤로그'
  ];

  const target = contents.slice(0, 4500);

  const result = sentencesToRemove.reduce((acc, sentence) => {
    const regex = new RegExp(sentence, 'g');
    return acc.replace(regex, '');
  }, target);

  const final = result
    .replace(/<[^>]*>/g, '')
    .replace('320x100', '')
    .replace('&lt;', '<')
    .replace('&gt;', '>');

  const regex = /data-url='([^']*)'/;
  const match = contents.match(regex);
  // console.log(match);
  return final;
}

function getImg(contents: any) {
  const regex = /srcset='([^']*)'/;
  const match = contents.match(regex);

  return match ? match[1] : null;
}

function getDate(date: any) {
  const getEnMonth = (monthNumber: number) => {
    const Month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    return Month[monthNumber];
  };

  const pubDate = new Date(date);
  const dateString = `${getEnMonth(
    pubDate.getMonth()
  )} ${pubDate.getDate()}, ${pubDate.getFullYear()}`;
  return dateString;
}

const Post = () => {
  const { data, loading } = useBlogData();
  const getParser = (desc: any) => {
    return new DOMParser().parseFromString(desc, 'text/html');
  };
  const [hover, setHover] = useState(null);

  return (
    <>
      <div className={c('post_inner', { hover }, `${hover}`)}>
        {/* {data ? (
            <>
              {data.map((item) => (
                <PostItem
                  key={item.title[0]}
                  url={item.link[0]}
                  src={getImg(item.description[0])}
                  title={item.title[0]}
                  date={getDate(item.pubDate[0])}
                  desc={removeTag(item.description[0])}
                />
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: 10 }, (_, index) => {
                return <PostItem isLoading key={`${index}`} />;
              })}
            </>
          )} */}

        <>
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <PostItem
                key={`${index}`}
                data={data?.[index]}
                idx={index}
                hover={hover}
                setHover={setHover}
              />
            );
          })}
        </>
        {/* {loading &&
          Array.from({ length: 10 }, (_, index) => {
            return <PostItem isLoading key={`${index}`} />;
          })}
        {!loading &&
          data?.map((item) => (
            <PostItem
              key={item.title[0]}
              url={item.link[0]}
              src={getImg(item.description[0])}
              title={item.title[0]}
              date={getDate(item.pubDate[0])}
              desc={removeTag(item.description[0])}
            />
          ))} */}

        {/* {tempPost.map((post, idx) => (
          <PostItem
            key={`${idx}`}
            url={post?.url}
            src={post?.src}
            title={post?.title}
            date={post?.date}
            desc={post?.desc}
          />
        ))} */}
        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>} */}
      </div>
    </>
  );
};

const Blog = () => {
  const blogRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: blogRef,
    offset: ['0', '1']
  });

  function mapRange(
    value: any,
    inputMin: any,
    inputMax: any,
    outputMin: any,
    outputMax: any
  ) {
    return (
      ((value - inputMin) / (inputMax - inputMin)) * (outputMax - outputMin) + outputMin
    );
  }

  const isLaptop = () => {
    const viewportWidth = typeof window !== `undefined` ? window.innerWidth : 0;
    if (viewportWidth <= 1300) {
      return true;
    } else {
      return false;
    }
  };

  const [isScrolling, setIsScrolling] = useState(false);
  const [isScrollOver, setIsScrollOver] = useState(false);

  const progress = useTransform(scrollY, (value) => {
    const refRect = blogRef.current?.getBoundingClientRect();
    const retOffset = blogRef?.current?.offsetTop || 0;
    const refHeight = refRect?.height || 0;
    const refTop = refRect?.top || 0;
    const viewportHeight = typeof window !== `undefined` ? window.innerHeight : 0;

    const max = refHeight + (retOffset - viewportHeight);
    // 800 + (900 - 500)
    const min = -60;
    const mappedValue = mapRange(value, retOffset, max, min, 0);

    if (isScrolling) {
      return `${mappedValue}%`;
    } else if (refTop > 0) {
      return '-60%';
    } else if (refTop < 0) {
      return '0%';
    }
  });

  const progress_y = useTransform(scrollY, (value) => {
    const refRect = blogRef.current?.getBoundingClientRect();
    const retOffset = blogRef?.current?.offsetTop || 0;
    const refHeight = refRect?.height || 0;
    const refTop = refRect?.top || 0;
    const marginTop = infoRef.current?.getBoundingClientRect().height || 0;
    const viewportHeight = typeof window !== `undefined` ? window.innerHeight : 0;

    const max = refHeight + (retOffset - viewportHeight);
    // const max = retOffset + refHeight - marginTop;
    const mappedValue = mapRange(value, retOffset + marginTop, max, -100, 0);

    if (isScrolling) {
      return `${mappedValue}%`;
    } else if (refTop > 0) {
      // return '-100%';
    } else if (refTop < 0) {
      // return '0%';
    }
  });

  const scrollY2 = useMotionValue(scrollY);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const refRect = blogRef.current?.getBoundingClientRect();
    const retOffset = blogRef?.current?.offsetTop || 0;
    const refHeight = refRect?.height || 0;
    const viewportHeight = typeof window !== `undefined` ? window.innerHeight : 0;

    const min = isLaptop() ? retOffset + (postRef.current?.offsetHeight || 0) : retOffset;

    const max = refHeight + (retOffset - viewportHeight);
    if (latest >= retOffset && latest <= max) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }

    if (refRect && refRect?.top <= 0) {
      setIsScrollOver(true);
    } else {
      setIsScrollOver(false);
    }
  });

  const alphabetOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  function fadeInUp(y = 30, x = 0, duration = 0.7) {
    return {
      hidden: {
        opacity: 0,
        y: y
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          ease: 'easeInOut',
          duration: duration
        }
      }
    };
  }

  const animation = {
    link: {
      hidden: {
        opacity: 0,
        x: -30
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          ease: 'easeInOut',
          duration: 0.5,
          delay: 0.4
        }
      }
    }
  };

  return (
    <motion.article
      className={c('blog', { isScrollOver, isScrolling })}
      ref={blogRef}
      initial="hidden"
      whileInView="visible"
      // viewport={{ amount: 0.1 }}
    >
      <div className={c('inner')}>
        <div className={c('info')} ref={infoRef}>
          <motion.div variants={fadeInUp()} className={c('info_inner')}>
            <div>
              <ArticleTitle className={c('title')}>Blog</ArticleTitle>
              <TextBig>articles you may like</TextBig>
            </div>
            <div>
              <p className={c('desc')}>
                쉽고, 재밌고, 특별함을 담아 글쓰는 걸 좋아해요.&nbsp;
                <br />
                새로 배운 지식부터 공유하고 싶은 경험까지 글로 차곡차곡 담았습니다.&nbsp;
                <br />
                지금까지 110만 명 이상이 블로그에 방문해서 글을 읽었어요.
              </p>
              <motion.div variants={animation.link}>
                <CustomLink className={c('link_blog')} href="https://nykim.work">
                  블로그 바로가기
                </CustomLink>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className={c('post')} ref={postRef}>
          <Post />
        </div>
      </div>
      <motion.div
        className={c('background', 'x')}
        style={{
          x: progress
        }}
      ></motion.div>
      <motion.div
        className={c('background', 'y')}
        style={{
          y: progress_y
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        style={{ opacity: alphabetOpacity }}
        viewport={{ amount: 0.1 }}
      >
        <Alphabet type="k" className={c('alphabet', 'k')} />
      </motion.div>
    </motion.article>
  );
};

export default Blog;
