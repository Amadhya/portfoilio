import React from 'react';

import { Typography, Col } from 'antd';
import { Row, Container, Separator } from 'commonStyles/layouts';
import styled from 'styled-components';

const { Title, Text } = Typography;

type Props = {
    _key: string;
    value: string;
};

const Wrapper = styled(Container)`
    background: black;
    padding: 4rem;
`;
const TitleWrapper = styled(Title)`
    color: white !important;
`;
const TextWrapper = styled(Text)`
    color: white !important;
`;

const KeyValueRow = (props: Props) => {
    const { _key, value } = props;
    return (
        <Row align="middle" gutter={[0, 16]}>
            <Col sm={{ span: 8 }}>
                <TextWrapper strong>{_key}:</TextWrapper>
            </Col>
            <Col sm={{ span: 16 }}>
                <TextWrapper>{value}</TextWrapper>
            </Col>
        </Row>
    );
};

const About = () => (
    <Wrapper>
        <Row justify="center" gutter={[18, 24]}>
            <Col sm={{ span: 9, offset: 3 }}>
                <TitleWrapper level={4}>About</TitleWrapper>
                <Separator />
                <TextWrapper>
                    Young, energetic and passionate engineer, who wants to pursue a challenging and
                    growing career as a Software Developer with the aim of holistic development and
                    organization’s growth.
                    <Separator height={0.1} />
                    Btw, helping out people is something that I relish the most and love to watch TV
                    series in my leisure time.
                </TextWrapper>
                <Separator height={4} />
                <TitleWrapper level={4}>Quote of my life</TitleWrapper>
                <Separator />
                <TextWrapper>
                    Life is not a game to be won, but a game to be played with zeal and enjoyment in
                    every moment till the end.
                </TextWrapper>
            </Col>
            <Col sm={{ span: 10, offset: 2 }}>
                <TitleWrapper level={4}>General Information</TitleWrapper>
                <KeyValueRow _key="Experience" value="10 months ( 6 months internship )" />
                <KeyValueRow _key="Email" value="eshuanand07@gmail.com" />
                <KeyValueRow _key="Address" value="Chandigarh, India" />
                <KeyValueRow _key="Languages" value="English, Hindi and Punjabi" />
            </Col>
        </Row>
    </Wrapper>
);

export default About;
