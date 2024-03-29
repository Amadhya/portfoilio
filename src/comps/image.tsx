import React, { useState, useCallback } from 'react';

import LazyLoad from 'react-lazyload';
import styled, { css } from 'styled-components';

import COLORS from 'constants/colors';

type ImageProps = {
  width: number;
  height: number;
  fullWidth: boolean;
  fullHeight: boolean;
};

type StyledImageProps = {
  circular: boolean;
};

const Container = styled.div<ImageProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};
  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100vh;
    `};
`;

const Placeholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.COLA_LIGHT};
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
  width?: number;
  height?: number;
  circular?: boolean;
  fullWidth?: boolean;
  fullHeight?: boolean;
};

const LazyImage = (props: Props) => {
  const { src, alt, width = 0, height = 0, circular, fullWidth, fullHeight } = props;
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const removePlaceholder = useCallback(() => {
    setShowPlaceholder(false);
  }, []);

  return (
    <Container height={height} width={width} fullWidth={!!fullWidth} fullHeight={!!fullHeight}>
      {showPlaceholder && <Placeholder />}
      <LazyLoad>
        <StyledImage
          onLoad={removePlaceholder}
          onError={removePlaceholder}
          src={src}
          alt={alt}
          circular={!!circular}
        />
      </LazyLoad>
    </Container>
  );
};

LazyImage.defaultProps = {
  circular: false,
  fullHeight: false,
  fullWidth: false,
  height: 0,
  width: 0,
};

export default LazyImage;
