import { Row as AntdRow, Col as AntdCol } from 'antd';
import styled, { css } from 'styled-components';

import COLORS from 'constants/colors';

type RowProps = {
  border?: number;
};

type ColProps = {
  flex?: any;
  justify?: string;
  align?: string;
  textalign?: string;
};

type SeparatorProps = {
  height?: number;
};

const separatorDefaultProps = {
  height: 1,
};

const defaultRowProps: RowProps = {
  border: 0,
};

export const Separator = styled.div<SeparatorProps>`
  height: ${({ height }) => (height ? height * 0.5 : 0.5)}rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem;
  @media (max-width: 767px) {
    padding: 2rem 0.5rem;
  }
`;

export const Row = styled(AntdRow)<RowProps>`
  width: 100%;

  ${({ border }) =>
    border &&
    css`
      border: 1px solid ${COLORS.COLA_LIGHT};
    `};
`;

export const Col = styled(AntdCol)<ColProps>`
  width: 100%;
  margin: 0 !important;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
    `};
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `};
  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `};
  ${({ textalign }) =>
    textalign &&
    css`
      text-align: ${textalign};
    `};
`;

export const Card = styled(Row)`
  width: 900px;
  margin: 12px 0px;
  box-shadow: 5px 5px 5px #f0f0f0;
  margin: 12px;
  border-radius: 8px;

  li {
    margin: 5px 0;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

Row.defaultProps = defaultRowProps;
Separator.defaultProps = separatorDefaultProps;
