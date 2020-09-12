import { Card as AntdCard, Row as AntdRow, Col as AntdCol } from 'antd';
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 4rem;
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

export const Card = styled(AntdCard)`
    width: 75%;
    margin: 12px 0px;
    .ant-card-head {
        padding: 0px;
    }
    .ant-card-body {
        padding: 0px;
    }
    .ant-card-extra {
        padding: 0;
    }
    .ant-card-head-title {
        padding: 0;
    }
    .ant-card-actions {
        li {
            margin: 5px 0;
        }
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    box-shadow: 5px 5px 5px #f0f0f0;
`;

Row.defaultProps = defaultRowProps;
Separator.defaultProps = separatorDefaultProps;
