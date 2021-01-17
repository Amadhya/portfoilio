import React from 'react';

import { BackTop } from 'antd';

import About from './about';
import ContactMe from './contactMe';
import Education from './education';
import Footer from './footer';
import Home from './home';
import NavBar from './navBar';
import Projects from './projects';
import Skills from './skills';
import WorkExp from './workExp';

const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkExp />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
      <BackTop />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default Portfolio;
