import React from 'react';

import About from './about';
import ContactMe from './contactMe';
import Education from './education';
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import WorkExp from './workExp';

const Portfolio = () => {
    return (
        <div>
            <Home />
            <About />
            <WorkExp />
            <Education />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    );
};

export default Portfolio;
