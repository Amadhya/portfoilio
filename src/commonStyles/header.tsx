import { Typography } from 'antd';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type Props = {
    border?: number;
};

const HeaderWrapper = styled(Typography.Title)<Props>`
    color: ${Colors.DARK_BLUE};
    margin-bottom: 4px !important;
    ${({ border }) =>
        border &&
        css`
            padding-bottom: 4px;
            border-bottom: 3px solid #434343;
        `};
`;

export default HeaderWrapper;
