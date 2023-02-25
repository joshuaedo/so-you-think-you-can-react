import MediaQuery from '@/components/responsiveness/mediaQuery';

function TestMediaQuery() {
  const [isSmallMobile, isMobile, isTablet, isLaptop, isDesktop, isWide] =
    MediaQuery();

  return (
    <>
      {isSmallMobile && <p>Small Mobile</p>}
      {isMobile && <p>Mobile</p>}
      {isTablet && <p>Tablet</p>}
      {isLaptop && <p>Laptop</p>}
      {isDesktop && <p>Desktop</p>}
      {isWide && <p>Wide</p>}
    </>
  );
}

export default TestMediaQuery;
