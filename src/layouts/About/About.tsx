import React, { useLayoutEffect, useRef } from 'react';
import {
  MotionValue,
  Variants,
  motion,
  useMotionValue,
  useScroll,
  useTransform
} from 'framer-motion';
import { cubicBezier } from 'framer-motion';
import classNames from 'classnames/bind';
import * as styles from './About.module.scss';
import CustomButton from '@components/CustomButton/CustomButton';
import NanaText from '@components/Logo/NanaText';
import CustomLink from '@components/CustomLink/CustomLink';
import Alphabet from '@components/Alphabet/Alphabet';
import ArticleTitle from '@components/ArticleTitle/ArticleTitle';
import TicketImg from './ticket.png';
const c = classNames.bind(styles);

const Ticket = () => {
  return (
    <article className={c('ticket')}>
      <div data-animate="ticket" className={c('ticket_img')}>
        {/* <img src={TicketImg} alt="" /> */}
        <span>May 25, 2023</span>
        <p>May 25, 2023</p>
      </div>
    </article>
  );
};

const Backgrounds = () => {
  return (
    <>
      {/* <div className={c('bg')}></div> */}
      <Alphabet type="l" className={c('l')} />
    </>
  );
};

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
      y: 50,
      skewY: 20,
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 305 57" fill="currentColor">
          <motion.path
            variants={svg}
            d="M14.937 53.678c-1.72 2.064-3.87 3.096-6.45 3.096s-4.616-.66-6.107-1.978C.947 53.477.23 51.757.23 49.636c0-.745.46-3.87 1.376-9.374l2.838-15.394H.832l.172-1.548h3.698c4.243 0 7.368-.172 9.374-.516l1.204-.258-5.934 32.508c1.72-.172 3.154-.975 4.3-2.408l1.29 1.032ZM7.368 14.29c-1.204-1.204-1.806-2.666-1.806-4.386 0-1.72.602-3.182 1.806-4.386 1.204-1.261 2.666-1.892 4.386-1.892 1.72 0 3.183.63 4.386 1.892 1.262 1.204 1.892 2.666 1.892 4.386 0 1.72-.63 3.182-1.892 4.386-1.204 1.204-2.665 1.806-4.386 1.806-1.72 0-3.182-.602-4.386-1.806Z"
          />
          <motion.path
            variants={svg}
            d="M68.005 56.774c-5.045 0-7.797-2.15-8.256-6.45-2.523 4.3-5.733 6.45-9.632 6.45-3.898 0-6.88-1.09-8.944-3.268-2.064-2.236-3.096-5.275-3.096-9.116 0-6.765 1.605-12.097 4.816-15.996 3.21-3.899 7.367-5.848 12.47-5.848 2.924 0 5.189.889 6.794 2.666.688.917 1.118 1.605 1.29 2.064l4.644-25.284c-1.72.172-3.153.975-4.3 2.408l-1.29-1.032c1.72-2.064 3.87-3.096 6.45-3.096 2.638 0 4.673.66 6.106 1.978 1.433 1.319 2.15 3.182 2.15 5.59 0 .459-.057 1.204-.172 2.236a6481.158 6481.158 0 0 1-8.17 44.978c1.72-.172 3.154-.975 4.3-2.408l1.29 1.032c-1.72 2.064-3.87 3.096-6.45 3.096Zm-20.21-8.858c0 2.637.258 4.443.774 5.418.573.975 1.433 1.462 2.58 1.462 1.204 0 2.35-.401 3.44-1.204 1.09-.803 2.007-1.835 2.752-3.096 1.376-2.121 2.35-3.927 2.924-5.418L62.76 31.49a9.27 9.27 0 0 0-1.806-4.988c-1.09-1.548-2.953-2.322-5.59-2.322-1.834 0-3.554 2.695-5.16 8.084-1.605 5.39-2.408 10.607-2.408 15.652Z"
          />
          <motion.path
            variants={svg}
            d="M92.734 56.774c-4.415 0-7.77-1.09-10.063-3.268-2.293-2.236-3.44-5.017-3.44-8.342 0-3.383.287-6.25.86-8.6a24.407 24.407 0 0 1 3.01-6.88c1.377-2.236 3.44-3.985 6.192-5.246 2.81-1.261 6.278-1.892 10.406-1.892 4.186 0 7.425 1.118 9.719 3.354 2.35 2.179 3.526 5.189 3.526 9.03 0 6.536-1.749 11.81-5.246 15.824-3.44 4.013-8.428 6.02-14.964 6.02Zm-3.784-8.858c0 4.587 1.318 6.88 3.956 6.88 2.694 0 5.073-2.293 7.138-6.88 2.121-4.644 3.182-10.148 3.182-16.512 0-4.816-1.319-7.224-3.957-7.224-2.58 0-4.959 2.207-7.138 6.622-2.12 4.357-3.181 10.062-3.181 17.114Z"
          />
          <motion.path
            variants={svg}
            d="M179.275 33.21c-1.204-1.204-1.806-2.666-1.806-4.386 0-1.72.602-3.182 1.806-4.386 1.204-1.261 2.551-1.892 4.042-1.892 1.548 0 2.838.401 3.87 1.204 1.089.745 1.863 1.72 2.322 2.924.057.057.086.115.086.172v.086c.688 1.49 1.032 3.555 1.032 6.192 0 2.58-.172 4.787-.516 6.622-.344 1.835-.975 3.784-1.892 5.848-.917 2.064-2.035 3.927-3.354 5.59-1.319 1.605-3.096 2.953-5.332 4.042-2.179 1.032-4.615 1.548-7.31 1.548-4.587 0-8.027-1.663-10.32-4.988-2.752 3.325-6.507 4.988-11.266 4.988-3.669 0-6.679-1.147-9.03-3.44-2.293-2.293-3.44-4.93-3.44-7.912 0-2.981.516-6.65 1.548-11.008 1.089-4.415 1.691-7.797 1.806-10.148-.917.057-1.806.401-2.666 1.032-.86.573-1.491 1.147-1.892 1.72l-.602.86-1.29-1.032a8.19 8.19 0 0 1 .774-1.204c.344-.459 1.204-1.09 2.58-1.892 1.433-.803 3.211-1.204 5.332-1.204s3.813.688 5.074 2.064c1.319 1.376 1.978 3.125 1.978 5.246 0 2.121-.573 5.418-1.72 9.89-1.147 4.415-1.72 7.54-1.72 9.374 0 1.777.401 3.182 1.204 4.214.86 1.032 2.064 1.548 3.612 1.548 3.325 0 6.163-1.72 8.514-5.16-.631-1.605-.946-3.469-.946-5.59s.516-5.36 1.548-9.718c1.089-4.415 1.691-7.797 1.806-10.148-.917.057-1.806.401-2.666 1.032-.86.573-1.491 1.147-1.892 1.72l-.602.86-1.29-1.032a8.19 8.19 0 0 1 .774-1.204c.344-.459 1.204-1.09 2.58-1.892 1.433-.803 3.211-1.204 5.332-1.204s3.813.688 5.074 2.064c1.319 1.376 1.978 3.125 1.978 5.246 0 2.121-.573 5.418-1.72 9.89-1.147 4.415-1.72 7.54-1.72 9.374 0 1.777.401 3.182 1.204 4.214.86 1.032 2.064 1.548 3.612 1.548 3.841 0 7.281-2.064 10.32-6.192 3.039-4.185 4.558-8.887 4.558-14.104 0-.401-.057-1.003-.172-1.806-1.204 1.49-2.752 2.236-4.644 2.236-1.835 0-3.354-.602-4.558-1.806Z"
          />
          <motion.path
            variants={svg}
            d="M227.044 55.054c1.376 0 2.809-.803 4.3-2.408l1.29 1.032c-.401.803-1.29 1.52-2.666 2.15-1.376.63-2.895.946-4.558.946-5.217 0-7.826-2.35-7.826-7.052 0-2.007.516-5.59 1.548-10.75s1.548-8.543 1.548-10.148c0-2.465-1.175-3.698-3.526-3.698-1.949 0-3.841 1.319-5.676 3.956-1.777 2.637-3.239 6.22-4.386 10.75L204.254 56h-10.32l9.546-54.008c-1.72.172-3.153.975-4.3 2.408l-1.29-1.032c1.72-2.064 3.87-3.096 6.45-3.096 2.637 0 4.673.66 6.106 1.978 1.433 1.319 2.15 3.182 2.15 5.59 0 .459-.057 1.204-.172 2.236l-3.612 20.382c2.351-5.275 5.991-7.912 10.922-7.912 3.383 0 6.02.975 7.912 2.924 1.892 1.892 2.838 4.53 2.838 7.912 0 1.777-.545 5.217-1.634 10.32-1.089 5.045-1.691 8.83-1.806 11.352Z"
          />
          <motion.path
            variants={svg}
            d="M267.06 56.774c-5.045 0-7.797-2.207-8.256-6.622-2.522 4.415-5.704 6.622-9.546 6.622-3.841 0-6.908-1.147-9.202-3.44-2.236-2.35-3.354-5.619-3.354-9.804 0-6.536 1.606-11.667 4.816-15.394 3.211-3.727 7.368-5.59 12.47-5.59 4.186 0 6.966 1.978 8.342 5.934.287-1.72.602-3.44.946-5.16 4.243 0 7.396-.172 9.46-.516l1.118-.258-5.934 32.508c1.72-.172 3.154-.975 4.3-2.408l1.29 1.032c-1.72 2.064-3.87 3.096-6.45 3.096Zm-20.64-8.858c0 2.58.316 4.386.946 5.418.688.975 1.72 1.462 3.096 1.462 1.376 0 2.781-.745 4.214-2.236 1.892-1.95 3.412-4.415 4.558-7.396.172-.745.488-2.523.946-5.332.516-2.867.946-5.217 1.29-7.052-.172-2.179-.774-4.07-1.806-5.676-1.032-1.605-2.322-2.408-3.87-2.408-2.809 0-5.074 2.523-6.794 7.568-1.72 4.988-2.58 10.205-2.58 15.652Z"
          />
          <motion.path
            variants={svg}
            d="m283.69 23.32 2.323-12.728c4.242 0 7.396-.172 9.46-.516l1.118-.258c-.803 4.013-1.692 8.514-2.667 13.502h10.665l-.172 1.548h-10.75c-2.867 14.792-4.301 23.707-4.301 26.746 0 1.835.975 2.752 2.924 2.752 1.95 0 3.727-1.233 5.332-3.698a25.386 25.386 0 0 0 3.44-7.998l1.549.516c-2.122 9.059-6.508 13.588-13.158 13.588-2.752 0-5.046-.745-6.88-2.236-1.835-1.548-2.753-3.67-2.753-6.364 0-2.752 1.176-10.52 3.526-23.306h-4.213l.172-1.548h4.385Z"
          />
        </svg>
      </div>
      <div className={c('text_big_svg', 'svg_2')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155 58" fill="currentColor">
          <motion.path
            variants={svg}
            d="M15.634 54.149c-1.735 2.082-3.904 3.123-6.506 3.123-2.603 0-4.656-.665-6.16-1.995-1.446-1.33-2.17-3.066-2.17-5.206 0-.752.464-3.904 1.389-9.457l2.863-15.53H1.406l.174-1.56h3.73c4.28 0 7.433-.174 9.457-.521l1.215-.26-5.987 32.794c1.735-.174 3.181-.983 4.338-2.43l1.301 1.042ZM8 14.413C6.785 13.2 6.178 11.724 6.178 9.99c0-1.735.607-3.21 1.822-4.425 1.214-1.272 2.69-1.908 4.424-1.908 1.736 0 3.21.636 4.425 1.908 1.273 1.215 1.909 2.69 1.909 4.425 0 1.735-.636 3.21-1.909 4.425-1.215 1.214-2.69 1.821-4.425 1.821-1.735 0-3.21-.607-4.424-1.821Z"
          />
          <motion.path
            variants={svg}
            d="M54.943 53.368c-.752.983-1.793 1.88-3.124 2.69-1.272.81-2.95 1.214-5.032 1.214s-3.846-.665-5.292-1.995c-1.446-1.33-2.169-3.21-2.169-5.64 0-.462.058-1.214.174-2.255l5.639-31.233c1.041-5.726 2.458-9.804 4.251-12.233 1.85-2.43 4.28-3.644 7.288-3.644 2.082 0 3.788.78 5.119 2.342 1.388 1.562 2.082 3.933 2.082 7.115 0 3.18-1.244 7.721-3.73 13.62-2.43 5.9-3.645 10.21-3.645 12.927h-1.561c0-3.065 1.214-7.432 3.643-13.1 2.43-5.726 3.644-10.295 3.644-13.708 0-2.082-.491-3.875-1.475-5.379-.925-1.503-2.082-2.255-3.47-2.255-.058 1.503-1.07 8.27-3.036 20.301-1.91 11.973-3.818 23.107-5.727 33.402 1.62 0 3.124-.839 4.512-2.516 1.388-1.678 2.371-3.355 2.95-5.032l.954-2.603 1.562.694c-.174.81-.636 1.996-1.389 3.557-.694 1.504-1.416 2.748-2.168 3.73Z"
          />
          <motion.path
            variants={svg}
            d="M79.263 54.149c-1.736 2.082-3.904 3.123-6.507 3.123-2.603 0-4.656-.665-6.16-1.995-1.446-1.33-2.169-3.066-2.169-5.206 0-.752.463-3.904 1.388-9.457l2.863-15.53h-3.644l.174-1.56h3.73c4.28 0 7.433-.174 9.457-.521l1.215-.26-5.987 32.794c1.736-.174 3.181-.983 4.338-2.43l1.302 1.042Zm-7.635-39.736c-1.215-1.214-1.822-2.689-1.822-4.424 0-1.735.607-3.21 1.822-4.425 1.215-1.272 2.69-1.908 4.425-1.908 1.735 0 3.21.636 4.424 1.908 1.273 1.215 1.909 2.69 1.909 4.425 0 1.735-.636 3.21-1.909 4.425-1.214 1.214-2.69 1.821-4.424 1.821-1.736 0-3.21-.607-4.425-1.821Z"
          />
          <motion.path
            variants={svg}
            d="M96.717 39.747 93.594 56.49H83.27l9.803-54.484c-1.735.174-3.18.983-4.337 2.43l-1.302-1.042C89.17 1.313 91.338.272 93.941.272c2.66 0 4.714.665 6.16 1.995 1.446 1.33 2.169 3.21 2.169 5.64 0 .462-.058 1.214-.174 2.255-1.33 7.346-2.776 15.27-4.338 23.772 1.446-3.528 3.529-6.275 6.247-8.242 2.718-1.966 5.61-2.95 8.676-2.95 3.065 0 5.205.608 6.42 1.822 1.272 1.215 1.908 2.747 1.908 4.598 0 1.793-.549 3.268-1.648 4.425-1.099 1.157-2.545 1.735-4.338 1.735-1.735 0-3.094-.491-4.077-1.475-.926-1.04-1.389-2.545-1.389-4.511 0-2.024.695-3.557 2.083-4.598-5.553.636-9.978 4.742-13.274 12.32.81-.116 1.504-.174 2.082-.174 3.065 0 5.466.607 7.201 1.822 1.793 1.214 2.95 2.718 3.47 4.511.521 1.735.897 3.5 1.128 5.292.231 1.736.607 3.21 1.128 4.425.52 1.215 1.446 1.822 2.776 1.822 1.33 0 2.371-.55 3.123-1.648l1.302 1.04c-.405.81-1.302 1.533-2.69 2.17-1.388.636-3.181.954-5.379.954-2.14 0-4.049-.55-5.726-1.648-1.619-1.1-2.747-2.459-3.383-4.078a44.009 44.009 0 0 1-1.562-4.945c-1.099-4.165-2.805-6.45-5.119-6.854Z"
          />
          <motion.path
            variants={svg}
            d="M143.716 22.742c7.346 0 11.019 2.921 11.019 8.763 0 3.644-1.736 6.42-5.206 8.329-3.412 1.85-8.3 2.805-14.662 2.863-.116 2.082-.173 3.73-.173 4.945 0 2.603.578 4.54 1.735 5.813 1.214 1.214 2.718 1.822 4.511 1.822 1.793 0 3.413-.348 4.859-1.042 1.503-.694 2.689-1.503 3.557-2.429a21.711 21.711 0 0 0 2.255-3.036c1.157-1.909 1.735-3.124 1.735-3.644l1.562.694c-.173.925-.694 2.169-1.562 3.73-.867 1.504-1.821 2.748-2.863 3.731-1.041.983-2.573 1.909-4.598 2.776-2.024.81-4.28 1.215-6.767 1.215-4.685 0-8.242-1.099-10.671-3.297-2.371-2.256-3.557-5.321-3.557-9.196 0-6.883 1.706-12.262 5.119-16.137 3.412-3.933 7.981-5.9 13.707-5.9Zm8.85 8.763c0-1.909-.579-3.47-1.735-4.685-1.099-1.273-2.777-1.909-5.032-1.909-2.198 0-4.367 1.33-6.507 3.991-2.083 2.66-3.471 6.594-4.165 11.8 11.626-.059 17.439-3.124 17.439-9.197Z"
          />
        </svg>
      </div>
    </motion.strong>
  );
};

const About = () => {
  const photo = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.7
      }
    }
  };

  const text = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15
      }
    }
  };

  const desc = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.15
      }
    }
  };

  // const fadeInUp() = {
  //   hidden: {
  //     opacity: 0,
  //     y: 30
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       ease: 'easeInOut',
  //       duration: 0.7
  //     }
  //   }
  // };

  const motion_link = {
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
        delay: 1
      }
    }
  };

  const timeline = {
    2: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          when: 'beforeChildren',
          staggerChildren: 0.4
        }
      }
    }
  };

  function fadeInUp(y = 30, duration = 0.7) {
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
    trigger: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
        // transition: {
        //   when: 'beforeChildren',
        //   staggerChildren: 0.4
        // }
      }
    },
    textBig: {
      hidden: {
        opacity: 0
      },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.025, delayChildren: i * 0 }
      })
    },
    desc: {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.4,
          when: 'beforeChildren',
          staggerChildren: 0.12
        }
      }
    }
  };

  return (
    <motion.article
      className={c('about')}
      variants={animation.trigger}
      initial="hidden"
      whileInView="visible"
    >
      <div className={c('visual')}>
        <div className={c('profile')}>
          <TextBig>I do what i like</TextBig>
          <motion.div>
            <motion.img
              className={c('photo')}
              variants={fadeInUp()}
              src="https://source.unsplash.com/random/?europe/460/440"
              alt="프로필 사진"
            />
            <motion.div className="center" variants={fadeInUp(40)}>
              <CustomButton className={c('download')} icon="download">
                이력서 다운로드
              </CustomButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div className={c('text')} variants={animation.desc}>
        <ArticleTitle className={c('title')}>
          About
          <NanaText className={c('nana')} />
        </ArticleTitle>
        <div className={c('desc')}>
          <motion.p variants={fadeInUp()}>
            안녕하세요! 웹 퍼블리셔 김나영입니다.
            <span className={c('aka')}>a.k.a, Nana</span>&nbsp;
            <br />
            저는 다양한 회사와 도메인에서 일을 했고, 프리랜서로 프로젝트를 수행한 경험이
            있습니다.
          </motion.p>
          <motion.p variants={fadeInUp()}>
            웹 퍼블리싱을 빠삭하게 이해하며 잘 다룹니다. React/TypeScript 등 프레임워크
            환경에서 컴포넌트 단위의 마크업 작업이 가능합니다. 어디에서도 잘 보이는
            반응형, 검색엔진에 맞춘 SEO, 크로스 브라우징과 웹 접근성을 고려한 퍼블리싱
            산출물을 만들어냅니다.
          </motion.p>
          <motion.p variants={fadeInUp()}>
            담당하는 프로젝트의 목적을 우선적으로 고려하며, 함께 할 동료들과 원활히
            협업하는 것을 가장 중요하게 생각해요. 다양한 직군과 함께 멋지고 즐거운 UX를
            만드는 데 관심이 많습니다.
          </motion.p>
        </div>
        <motion.div variants={motion_link}>
          <CustomLink className={c('link')} href="https://nykim.net/about">
            자기소개 더보기
          </CustomLink>
        </motion.div>
      </motion.div>
    </motion.article>
  );
};

export default About;
