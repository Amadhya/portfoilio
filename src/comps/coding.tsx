import React from 'react';

import Lottie from 'react-lottie';
import styled from 'styled-components';

import animationData from 'lotties/coding.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Container = styled.div`
  position: relative;
`;

const CodingIcon = () => (
  <Container>
    <Lottie
      options={defaultOptions}
      height="100%"
      width="100%"
      style={{ justifyContent: 'center' }}
    />
  </Container>
);

export default CodingIcon;
