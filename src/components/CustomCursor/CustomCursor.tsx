import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import * as styles from './CustomCursor.module.scss';
const c = classNames.bind(styles);

const CustomCursor: React.FC = () => {
  // TODO: user-agent가 모바일이면 이벤트 실행 막기
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<'outlink' | 'download' | 'copy' | null>(null);

  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(false);

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseOver = () => {
    console.log(' 오버!');
  };
  const onMouseOut = () => {
    console.log(' 아웃!');
  };

  const onMouseEnter = () => {
    console.log(' 엔터!');
    setHidden(false);
  };

  const onMouseLeave = () => {
    console.log(' 리브!');
    setHidden(true);
  };

  const onLinkMouseEnter = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      const cursor = (e.target as any)?.dataset?.cursor || null;
      console.log('링크 엔터!');
      setHovered(cursor);
      setHover(true);
    }
  };
  const onLinkMouseLeave = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      console.log('링크 리브!');
      setHovered(null);
      setHover(false);
    }
  };

  const addMouseEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onLinkMouseEnter as (e: Event) => void);
    document.addEventListener('mouseleave', onLinkMouseLeave as (e: Event) => void);

    document.querySelectorAll('[data-cursor]').forEach(function (el) {
      el.addEventListener('mouseenter', onLinkMouseEnter as (e: Event) => void);
      el.addEventListener('mouseleave', onLinkMouseLeave as (e: Event) => void);
    });
  };

  const removeMouseEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseenter', onMouseEnter);
    document.removeEventListener('mouseleave', onMouseLeave);
    document.removeEventListener('mouseenter', onLinkMouseEnter as (e: Event) => void);
    document.removeEventListener('mouseleave', onLinkMouseLeave as (e: Event) => void);

    document.querySelectorAll('[data-cursor]').forEach(function (el) {
      el.removeEventListener('mouseenter', onLinkMouseEnter as (e: Event) => void);
      el.removeEventListener('mouseleave', onLinkMouseLeave as (e: Event) => void);
    });
  };

  const dotStyle = {
    // top: `${position.y}px`,
    // left: `${position.x}px`,
    transform: `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0)`
  };

  const bgStyle = {
    opacity: hidden ? 0 : 1,
    transform: `translate3d(calc(${position.x}px - 8px), calc(${
      position.y
    }px - 8px), 0) scale(${!!hovered ? 3 : 1})`
  };

  useEffect(() => {
    addMouseEventListeners();
    return () => removeMouseEventListeners();
  }, []);

  return (
    <>
      <div className={c('cursor', { hovered }, `${hovered}`)} style={bgStyle}>
        <span className={c('cursor_text', 'text_copied')}>Copied!</span>
        <span className={c('cursor_text', 'text_copy')}>Copy</span>
      </div>
    </>
  );
};

export default CustomCursor;

// const CustomCursor: React.FC = () => {
//   const [position, setPosition] = useState({ x: -100, y: -100 });
//   const [hidden, setHidden] = useState(false);

//   useEffect(() => {
//     addEventListeners();
//     return () => removeEventListeners();
//   }, []);

//   const addEventListeners = () => {
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('mouseenter', onMouseEnter);
//     document.addEventListener('mouseleave', onMouseLeave);
//   };

//   const removeEventListeners = () => {
//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseenter', onMouseEnter);
//     document.removeEventListener('mouseleave', onMouseLeave);
//   };

//   const onMouseMove = (e: MouseEvent) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   const onMouseEnter = () => {
//     setHidden(false);
//   };

//   const onMouseLeave = () => {
//     setHidden(true);
//   };

//   const cursorStyle = {
//     position: 'fixed',
//     zIndex: 999999,
//     background: 'red',
//     width: 50,
//     height: 50,
//     left: `${position.x}px`,
//     top: `${position.y}px`,
//     transform: hidden
//       ? 'translate(-50%, -50%) scale(0)'
//       : 'translate(-50%, -50%) scale(1)'
//   };

//   return (
//     <div className="custom-cursor" style={cursorStyle}>
//       <div className="custom-cursor-inner"></div>
//     </div>
//   );
// };
