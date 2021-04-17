import React from 'react';

import About from './about';
import ContactMe from './contactMe';
import Education from './education';
import Footer from './footer';
import Projects from './projects';
import Skills from './skills';
import WorkExp from './workExp';

const Portfolio = () => {
  return (
    <>
      <About />
      <WorkExp />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Portfolio;
