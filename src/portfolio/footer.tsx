import React from 'react';

import { Copyright } from '@styled-icons/boxicons-solid/Copyright';
import { Typography } from 'antd';
import { Container } from 'commonStyles/layouts';
import styled from 'styled-components';

const { Text } = Typography;

const CopyrightIcon = styled(Copyright)`
  margin-right: 6px;
`;

const TextWrapper = styled(Text)`
  font-weight: 500;
`;

const Footer = () => (
  <Container>
    <TextWrapper>
      <CopyrightIcon size={14} />
      Amadhya Anand. All rights reserved.
    </TextWrapper>
  </Container>
);

export default Footer;
