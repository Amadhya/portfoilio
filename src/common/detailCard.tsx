import React from 'react';

import { Typography, Col, Button } from 'antd';
import styled, { css } from 'styled-components';

import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
import { Card } from 'commonStyles/layouts';
import COLORS from 'constants/colors';

type ColProps = {
  bg?: number;
  textalign?: string;
};

const { Title, Text } = Typography;

const StyledCol = styled(Col)<ColProps>`
  padding: 1rem 2rem;
  ${({ bg }) =>
    bg === 1 &&
    css`
      background: linear-gradient(0deg, ${COLORS.BIG_STONE}, ${COLORS.CLOUD_BURST});
    `};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 0px 0px 8px;

  ${({ textalign }) =>
    textalign &&
    css`
      text-align: ${textalign};
    `};

  @media (max-width: 767px) {
    border-radius: 8px 8px 0px 0px;
  }
`;

const StyledText = styled(Text)`
  display: block;
  color: ${COLORS.WHITE} !important;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-top: 0.5em !important;
  color: ${COLORS.WHITE} !important;
  text-align: center;
`;

const StyledLink = styled.a`
  color: ${COLORS.WHITE} !important;
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
    <Card border={1}>
      <StyledCol sm={{ span: 6 }} xs={{ span: 24 }} bg={1} textalign="center">
        <SlideInLeftBox>
          {period && <StyledText>{period}</StyledText>}
          <StyledTitle level={4}>{title}</StyledTitle>
          {link && (
            <StyledLink href={link} aria-label={title} target="_blank" rel="noopener">
              <Button shape="round">View</Button>
            </StyledLink>
          )}
        </SlideInLeftBox>
      </StyledCol>
      <StyledCol sm={{ span: 18 }} xs={{ span: 24 }}>
        <SlideInRightBox xOffset={5}>{children}</SlideInRightBox>
      </StyledCol>
    </Card>
  );
};

export default DetailCard;
