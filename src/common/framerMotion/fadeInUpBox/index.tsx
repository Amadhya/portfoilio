import React, { useMemo } from 'react';

import AnimatedDiv from 'common/animated-div';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
  yOffset: number;
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
  onHover?: boolean;
};

const FadeInUpBox = (props: Props) => {
  const { children, yOffset, easing = [0.42, 0, 0.58, 1], onHover = false } = props;

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const transition = useMemo(
    () => ({
      duration: 0.4,
      ease: easing,
      delay: 0.15,
    }),
    [easing],
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
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
        whileHover={
          onHover
            ? {
                position: 'relative',
                top: '-10px',
                paddingBottom: '10px',
              }
            : undefined
        }
        exit="hidden"
        variants={variants}
      >
        {children}
      </AnimatedDiv>
    </div>
  );
};

export default FadeInUpBox;
