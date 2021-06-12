import React, { Suspense, lazy } from 'react';

import { BackTop } from 'antd';

import Home from './home';
import Navbar from './navBar';

const FONT_LINK = "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap";

const Details = lazy(() => import('./details'));

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Details />
        <BackTop />
      </Suspense>
      <link
        href={FONT_LINK}
        rel="stylesheet"
      />
    </>
  );
};

export default Portfolio;
