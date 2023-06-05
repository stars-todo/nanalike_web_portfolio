export const fadeInUp = (y = 30, duration = 0.65, delay = 0) => {
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
        duration: duration,
        delay: delay
      }
    }
  };
};

export const aboutAnimation = {
  trigger: {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
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
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.12
      }
    }
  },
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
        delay: 0.6
      }
    }
  }
};
