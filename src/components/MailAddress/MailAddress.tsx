import React from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import * as styles from './MailAddress.module.scss';
import useViewport from '@hooks/useViewport';
const c = classNames.bind(styles);

const MailAddress = ({ setCopied, className, size = 'normal', setMailHover }: any) => {
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

  const handleCopy = (copyText: string) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = copyText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      document.body.classList.add('copied');
      setCopied(true);
      setTimeout(() => {
        document.body.classList.remove('copied');
        setCopied(false);
      }, 1000);
    } catch (error) {
      document.body.classList.remove('copied');
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <div className={c('mail', `${size}`, className)}>
      <div
        className={c('mail_button')}
        // onClick={() => handleCopy('nykim@nykim.net')}
        onMouseOver={() => {
          if (setMailHover) {
            setMailHover(true);
          }
        }}
        onMouseLeave={() => {
          if (setMailHover) {
            setMailHover(false);
          }
        }}
        // data-cursor="copy"
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
      </div>
    </div>
  );
};

export default MailAddress;
