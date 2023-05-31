import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import * as styles from './MailAddress.module.scss';
import useViewport from '@hooks/useViewport';
const c = classNames.bind(styles);

const MailAddress = ({ size = 'normal' }: { size?: 'normal' | 'small' }) => {
  const { isMobile } = useViewport();
  const animation = {
    mailReveal: {
      hidden: {
        opacity: 0
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.02, delayChildren: i * 0 }
      })
    },
    mailText: {
      hidden: {
        y: isMobile ? 50 : 100,
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
    }
  };
  return (
    <div className={c('mail', `${size}`)}>
      <button
        className={c('mail_button')}
        onClick={() => alert('복사!')}
        title="클릭으로 메일 주소 복사 💌"
      >
        <motion.div
          className={c('mail_animation')}
          variants={animation.mailReveal}
          aria-label="nykim@nykim.net"
        >
          {Array.from('nykim@nykim.net').map((letter, index) => (
            <motion.div
              key={index}
              className={c('mail_address')}
              variants={animation.mailText}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.div>
          ))}
        </motion.div>
      </button>
    </div>
  );
};

export default MailAddress;
