import { Typography } from 'antd';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type Props = {
    border?: number;
    color?: string;
    align?: string;
    fontWeight?: number;
};

const HeaderWrapper = styled(Typography.Title)<Props>`
    color: ${({ color }) => color || Colors.DARK_BLUE} !important;
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
            border-bottom: 3px solid ${color === 'white' ? 'white' : '#434343'} !important;
        `};
`;

export default HeaderWrapper;
