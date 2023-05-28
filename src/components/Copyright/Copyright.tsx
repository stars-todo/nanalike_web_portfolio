import React from 'react';
import classNames from 'classnames/bind';
import * as styles from './Copyright.module.scss';
import NanaText from '@components/Logo/NanaText';
import { motion } from 'framer-motion';
const c = classNames.bind(styles);

const Copyright = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={c('copyright', className)}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
    >
      <div className={c('madeBy')} aria-label="Made by Nana with love">
        <span>Made by</span>
        <NanaText className={c('nana')} />
        <span>with</span>
        <span className={c('heart')} role="img" aria-label="heart">
          ❤️
        </span>
      </div>
      <div className={c('text')}>(C) 2023 nykim.net</div>
    </motion.div>
  );
};

export default Copyright;
