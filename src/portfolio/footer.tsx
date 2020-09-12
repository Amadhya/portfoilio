import React from 'react';

import { Typography } from 'antd';
import HeaderWrapper from 'commonStyles/header';
import { Container, Separator } from 'commonStyles/layouts';

const { Text } = Typography;

const Footer = () => (
    <Container>
        <HeaderWrapper level={3}>Amadhya Anand</HeaderWrapper>
        <Separator height={3} />
        <Text strong>© Amadhya Labs. All rights reserved.</Text>
    </Container>
);

export default Footer;
