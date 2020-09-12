import React from 'react';

import About from './about';
import Education from './education';
import Home from './home';
import WorkExp from './workExp';

const Portfolio = () => {
    return (
        <div>
            <Home />
            <About />
            <WorkExp />
            <Education />
        </div>
    );
};

export default Portfolio;
