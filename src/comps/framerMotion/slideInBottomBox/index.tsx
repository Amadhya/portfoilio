import React, { useMemo } from 'react';

import { useInView } from 'react-intersection-observer';

import AnimatedDiv from 'comps/animated-div';

type Props = {
  children: React.ReactNode;
  easing?:
    | [number, number, number, number]
    | 'linear'
    | 'easeIn'
    | 'easeOut'
    | 'easeInOut'
    | 'circIn'
    | 'circOut'
    | 'circInOut'
    | 'backIn'
    | 'backOut'
    | 'backInOut'
    | 'anticipate';
};

const SlideInBottomBox = (props: Props) => {
  const { children, easing = [0.42, 0, 0.58, 1] } = props;

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const transition = useMemo(
    () => ({
      duration: 0.6,
      ease: easing,
      delay: 0.15,
    }),
    [easing],
  );

  const variants = {
    hidden: {
      y: '100%',
      opacity: 0,
      transition,
    },
    show: {
      y: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <div ref={ref}>
      <AnimatedDiv
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        exit="hidden"
        variants={variants}
      >
        {children}
      </AnimatedDiv>
    </div>
  );
};

export default SlideInBottomBox;
