import React from 'react';

import { Email } from '@styled-icons/material-rounded/Email';
import { LocationOn } from '@styled-icons/material-rounded/LocationOn';
import { Typography, Space } from 'antd';
import styled, { css } from 'styled-components';

import ContactUs from 'assets/contact_us.svg';
import StyledTitle from 'commonStyles/header';
import { Separator } from 'commonStyles/layouts';
// import FadeInBox from 'comps/framerMotion/fadeInBox';
import ABOUT from 'constants/about';
import COLORS from 'constants/colors';

const { Text } = Typography;

const StyledContainer = styled.div`
  background: linear-gradient(0deg, ${COLORS.BIG_STONE}, ${COLORS.CLOUD_BURST});
  border-radius: 12px;
  bottom: 0;
  margin: 24px 0px;
  padding: 24px 32px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(25%);
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 334px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
`;

type TextProps = {
  isTitle?: boolean;
};

const StyledText = styled(Text)<TextProps>`
  color: ${COLORS.WHITE_LIGHT} !important;
  ${({ isTitle }) =>
    isTitle &&
    css`
      font-size: 16px;
      font-weight: 700;
    `};
`;

const StyledDetail = styled.div`
  padding: 8px 0px;
`;

const DETAILS_INFO = [
  {
    title: 'Address',
    text: ABOUT.address,
    Icon: LocationOn,
  },
  {
    title: 'Email',
    text: ABOUT.email,
    Icon: Email,
  },
];

type DetailProps = {
  title: string;
  text: string;
  Icon: React.ElementType;
};

const Detail = ({ title, text, Icon }: DetailProps) => (
  <StyledDetail>
    <Space size="large">
      <Icon size={24} color={COLORS.WHITE_LIGHT} />
      <div>
        <StyledText>{title}</StyledText>
        <Separator height={0.5} />
        <StyledText isTitle>{text}</StyledText>
      </div>
    </Space>
  </StyledDetail>
);

const Details = () => (
  <StyledContainer>
    <StyledTitle level={3} fontWeight={1} color={COLORS.WHITE}>
      Contact Me
    </StyledTitle>
    <Separator />
    {DETAILS_INFO.map(({ title, text, Icon }) => (
      <Detail key={title} title={title} text={text} Icon={Icon} />
    ))}
    <StyledImg src={ContactUs} alt="contact-us" />
  </StyledContainer>
);

export default Details;
