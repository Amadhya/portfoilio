import React, { useMemo } from 'react';

import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import AnimatedDiv from 'comps/animated-div';

const Container = styled.div`
  height: 100%;
`;

type Props = {
  children: React.ReactNode;
  xOffset: number;
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

const HIDDEN = 'hidden';
const SHOW = 'show';

const SlideInRightBox = (props: Props) => {
  const { children, easing = [0.42, 0, 0.58, 1], xOffset } = props;

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
      x: `${xOffset}%`,
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
    <Container ref={ref}>
      <AnimatedDiv
        animate={inView ? SHOW : HIDDEN}
        exit={HIDDEN}
        initial={HIDDEN}
        style={{ height: '100%' }}
        variants={variants}
      >
        {children}
      </AnimatedDiv>
    </Container>
  );
};

export default SlideInRightBox;
