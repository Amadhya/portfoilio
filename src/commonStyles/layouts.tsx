import { Row as AntdRow, Col as AntdCol } from 'antd';
import styled, { css } from 'styled-components';

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
    padding: 0.5rem 2rem;
    @media (max-width: 767px) {
        padding: 0.5rem 1rem;
    }
`;

export const Row = styled(AntdRow)<RowProps>`
    width: 100%;
    margin: 0 !important;
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

Row.defaultProps = defaultRowProps;
Separator.defaultProps = separatorDefaultProps;
