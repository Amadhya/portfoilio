import React from 'react';

import { Copyright } from '@styled-icons/boxicons-solid/Copyright';
import { Typography } from 'antd';
import styled from 'styled-components';

import { Container } from 'commonStyles/layouts';

const { Text } = Typography;

const CopyrightIcon = styled(Copyright)`
  margin-right: 6px;
`;

const StyledText = styled(Text)`
  font-weight: 500;
`;

const Footer = () => (
  <Container>
    <StyledText>
      <CopyrightIcon size={14} />
      Amadhya Anand. All rights reserved.
    </StyledText>
  </Container>
);

export default Footer;
