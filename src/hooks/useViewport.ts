const useViewport = () => {
  const w = window.innerWidth;
  let isDesktop;
  let isLaptop;
  let isTablet;
  let isMobile;

  if (w >= 1600) {
    isDesktop = true;
  } else if (w >= 1300) {
    isLaptop = true;
  } else if (w >= 900) {
    isTablet = true;
  } else {
    isMobile = true;
  }

  console.log('isLaptop', isLaptop);
  console.log('isTablet', isTablet);
  console.log('isMobile', isMobile);

  return {
    isDesktop,
    isLaptop,
    isTablet,
    isMobile
  };
};

export default useViewport;