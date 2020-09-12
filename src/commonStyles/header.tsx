import { Typography } from 'antd';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type Props = {
    border?: number;
    white?: number;
    fontWeight?: number;
};

const HeaderWrapper = styled(Typography.Title)<Props>`
    color: ${({ white }) => (white ? 'white' : Colors.DARK_BLUE)} !important;
    margin-bottom: 4px !important;
    ${({ fontWeight }) =>
        fontWeight &&
        css`
            font-weight: 700 !important;
        `};
    ${({ border, white }) =>
        border &&
        css`
            padding-bottom: 4px;
            border-bottom: 3px solid ${white ? 'white' : '#434343'} !important;
        `};
`;

export default HeaderWrapper;
