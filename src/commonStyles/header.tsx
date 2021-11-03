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
  margin-bottom: 8px !important;
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
  ${({ border }) =>
    border &&
    css`
      padding-bottom: 4px;
      border-bottom: 4px solid ${COLORS.DODGER_PURPLE} !important;
    `};
`;

export default StyledTitle;
