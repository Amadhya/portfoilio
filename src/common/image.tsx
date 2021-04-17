import React, { useState, useCallback } from 'react';

import Colors from 'constants/colors';
import LazyLoad from 'react-lazyload';
import styled, { keyframes, css } from 'styled-components';

type ImageProps = {
  width: number;
  height: number;
};

type StyledImageProps = {
  circular: boolean;
};

const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: ${Colors.LIGHT_BLACK};
  }
  50% {
    background-color: ${Colors.COLA_LIGHT};
  }
  100% {
    background-color: ${Colors.LIGHT_BLACK};
  }
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const StyledImage = styled.img<StyledImageProps>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ circular }) =>
    circular &&
    css`
      border-radius: 50%;
    `};
`;

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  circular: boolean;
};

const LazyImage = (props: Props) => {
  const { src, alt, width, height, circular } = props;
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const removePlaceholder = useCallback(() => {
    setShowPlaceholder(false);
  }, []);

  return (
    <ImageWrapper height={height} width={width}>
      {showPlaceholder && <Placeholder />}
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          circular={circular}
        />
      </LazyLoad>
    </ImageWrapper>
  );
};

export default LazyImage;
