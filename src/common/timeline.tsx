import React from 'react';

import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 24px;
  padding-left: 24px;
  margin: 0px 36px;
`;

const Item = styled.div`
  ${({ isLast }) =>
    !isLast &&
    css`
      border-left: 3px dashed blue;
      height: 100%;
      position: absolute;
      z-index: -1;
      left: 0;
    `};
`;

const Circle = styled.div`
  background: red;
  border-radius: 50%;
  height: 24px;
  left: 0px;
  position: absolute;
  position: absolute;
  top: 0px;
  transform: translate(-50%, 0%);
  width: 24px;
`;

const arr = [
  {
    t1: 'Hello CodeSandbox',
    t2: 'Start editing to see some magic happen!',
  },
  {
    t1: 'Hello CodeSandbox',
    t2: 'Start editing to see some magic happen!',
  },
  {
    t1: 'Hello CodeSandbox',
    t2: 'Start editing to see some magic happen!',
  },
];

const Timeline = () => {
  return (
    <div>
      {arr.map(({ t1, t2 }, index) => (
        <Wrapper>
          <Circle />
          <Item isLast={index + 1 === arr.length} />
          <div>{t1}</div>
          <div>{t2}</div>
        </Wrapper>
      ))}
    </div>
  );
};

export default Timeline;
