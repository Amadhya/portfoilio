import React, { useMemo } from 'react';

import AnimatedDiv from 'common/animated-div';
import { useInView } from 'react-intersection-observer';

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

const SlideInLeftBox = (props: Props) => {
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
      x: '-100%',
      opacity: 0,
      transition,
    },
    show: {
      x: 0,
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

export default SlideInLeftBox;
