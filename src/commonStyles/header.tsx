import { Typography } from 'antd';
import styled, { css } from 'styled-components';

import COLORS from 'constants/colors';

type Props = {
  border?: number;
  color?: string;
  align?: string;
  fontWeight?: number;
};

const StyledTitle = styled(Typography.Title)<Props>`
  color: ${({ color }) => color || COLORS.EBONY_CLAY} !important;
  margin-bottom: 4px !important;
  ${({ align }) =>
    align &&
    css`
      text-align: ${align};
    `};
  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: 700 !important;
    `};
  ${({ border, color }) =>
    border &&
    css`
      padding-bottom: 4px;
      border-bottom: 3px solid ${color || '#434343'} !important;
    `};
`;

export default StyledTitle;
