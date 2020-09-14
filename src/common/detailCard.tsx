import React from 'react';

import { ExportOutlined } from '@ant-design/icons';
import { Typography, Col } from 'antd';
import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
import { Row, Card } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import styled, { css } from 'styled-components';

type ColProps = {
    bg?: number;
    pb?: number;
};

const { Title, Text } = Typography;

const ColWrapper = styled(Col)<ColProps>`
    padding: 1rem 2rem;
    ${({ bg }) =>
        bg === 1 &&
        css`
            background: linear-gradient(
                0deg,
                ${Colors.DARK_OCEAN_GRADIENT.PRIMARY_COLOR},
                ${Colors.DARK_OCEAN_GRADIENT.SECONDARY_COLOR}
            );
        `};
    ${({ pb }) =>
        pb === 1 &&
        css`
            padding-bottom: 3rem;
        `};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const TextWrapper = styled(Text)`
    display: block;
    color: white !important;
    text-align: center;
`;
const TitleWrapper = styled(Title)`
    margin-top: 0.5em !important;
    color: white !important;
    text-align: center;
`;

type Props = {
    period?: string;
    link?: string;
    title: string;
    children: React.ReactNode;
};

const DetailCard = (props: Props) => {
    const { period, title, children, link } = props;

    return (
        <Card>
            <Row>
                <ColWrapper sm={{ span: 6 }} xs={{ span: 24 }} bg={1}>
                    <SlideInLeftBox>
                        {period && <TextWrapper>{period}</TextWrapper>}
                        <TitleWrapper level={4}>
                            {title}{' '}
                            {link && (
                                <a href={link} style={{ color: 'white' }}>
                                    <ExportOutlined />
                                </a>
                            )}
                        </TitleWrapper>
                    </SlideInLeftBox>
                </ColWrapper>
                <ColWrapper sm={{ span: 18 }} xs={{ span: 24 }} pb={1}>
                    <SlideInRightBox xOffset={5}>{children}</SlideInRightBox>
                </ColWrapper>
            </Row>
        </Card>
    );
};

export default DetailCard;
