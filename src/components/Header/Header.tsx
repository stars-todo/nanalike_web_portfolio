import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Header.module.scss';
import LangSelect from '@components/LangSelect/LangSelect';
import { motion } from 'framer-motion';
const c = classNames.bind(styles);

const Header = () => {
  const animation = {
    header: {
      hidden: { opacity: 0, transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.1
          // ease: 'linear'
        }
      }
    },
    headerText: {
      hidden: { opacity: 0, x: 0, transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.85,
          ease: 'linear'
        }
      }
    },
    headerLines: {
      hidden: { opacity: 0, scaleX: 0, transition: { ease: 'linear' } },
      visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
          duration: 0.6,
          ease: 'linear'
        }
      }
    }
  };
  return (
    <header className={c('header')}>
      <motion.div
        className={c('inner')}
        // variants={animation.header}
        // initial="hidden"
        // animate="visible"
      >
        <motion.div
          className={c('line', 'bold')}
          // variants={animation.headerLines}
        />
        <motion.div
          className={c('top')}
          // variants={animation.headerText}
        >
          <h1 className={c('title')}>Nana's Web Portfolio</h1>
          <a className={c('mail')} href="mailto:nykim@nykim.net">
            nykim@nykim.net
          </a>
          <span className={c('status')}>
            <span>Available Now</span>
          </span>
          {/* <span className={c('circle')}>nanalikenanalikenanalikenanalikenanalike</span> */}
        </motion.div>
        <motion.div
          className={c('line')}
          // variants={animation.headerLines}
        />
        <motion.div
          className={c('bottom')}
          // variants={animation.headerText}
        >
          <span>나나: 좋아해서 더 잘하는 웹 퍼블리셔</span>
          {/* TODO: 언어 추가 */}
          {/* <LangSelect className={c('langs')} /> */}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
