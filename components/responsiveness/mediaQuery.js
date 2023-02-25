import useDeviceSize from '@/components/responsiveness/useDeviceSize';

function MediaQuery() {
  const [width, height] = useDeviceSize();
  const isSmallMobile = width <= 576;
  const isMobile = width >= 577 && width <= 767;
  const isTablet = width >= 768 && width <= 992;
  const isLaptop = width >= 993 && width <= 1200;
  const isDesktop = width >= 1201 && width <= 1400;
  const isWide = width >= 1401;

  return [isSmallMobile, isMobile, isTablet, isLaptop, isDesktop, isWide];
}

export default MediaQuery;
