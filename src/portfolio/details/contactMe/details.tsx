import React from 'react';

import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';
import { Email } from '@styled-icons/material-rounded/Email';
import { LocationOn } from '@styled-icons/material-rounded/LocationOn';
import { Typography, Space } from 'antd';
import styled, { css } from 'styled-components';

import ContactUs from 'assets/contact_us.svg';
import StyledTitle from 'commonStyles/header';
import { Separator } from 'commonStyles/layouts';
import SlideInRightBox from 'comps/framerMotion/slideInRightBox';
import ABOUT from 'constants/about';
import COLORS from 'constants/colors';

const { Text } = Typography;

const StyledCard = styled.div`
  background: linear-gradient(0deg, ${COLORS.BIG_STONE}, ${COLORS.CLOUD_BURST});
  border-radius: 12px;
  padding: 24px 32px;
  height: 100%;
`;

const AbsoluteContainer = styled.div`
  bottom: 0;
  margin: 24px 0px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(25%);
  @media (max-width: 992px) {
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
      max-width: 225px;
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
  {
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/amadhya-anand-1761b8169/',
    Icon: Linkedin,
  },
];

type DetailProps = {
  Icon: React.ElementType;
  link?: string;
  text?: string;
  title: string;
};

const Detail = ({ title, text, Icon, link }: DetailProps) => (
  <StyledDetail>
    <Space size="large">
      <Icon size={24} color={COLORS.WHITE_LIGHT} />
      <div>
        <StyledText>{title}</StyledText>
        <Separator height={0.5} />
        {text && <StyledText isTitle>{text}</StyledText>}
        {link && (
          <a href={link} aria-label={title} target="_blank" rel="noopener noreferrer">
            <StyledText isTitle ellipsis>
              {link}
            </StyledText>
          </a>
        )}
      </div>
    </Space>
  </StyledDetail>
);

const Details = () => (
  <AbsoluteContainer>
    <SlideInRightBox xOffset={20}>
      <StyledCard>
        <StyledTitle level={3} fontWeight={1} color={COLORS.WHITE}>
          Contact Me
        </StyledTitle>
        <Separator />
        {DETAILS_INFO.map(({ title, text, Icon, link }) => (
          <Detail key={title} title={title} text={text} link={link} Icon={Icon} />
        ))}
        <StyledImg src={ContactUs} alt="contact-us" />
      </StyledCard>
    </SlideInRightBox>
  </AbsoluteContainer>
);

export default Details;
