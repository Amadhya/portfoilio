import React from 'react';

import { ExternalLinkOutline } from '@styled-icons/evaicons-outline/ExternalLinkOutline';
import { Typography, Col, Tooltip } from 'antd';
import styled, { css } from 'styled-components';

import SlideInLeftBox from 'common/framerMotion/slideInLeftBox';
import SlideInRightBox from 'common/framerMotion/slideInRightBox';
import { Card } from 'commonStyles/layouts';
import Colors from 'constants/colors';

type ColProps = {
  bg?: number;
};

const { Title, Text } = Typography;

const ColWrapper = styled(Col)<ColProps>`
  padding: 1rem 2rem;
  ${({ bg }) =>
    bg === 1 &&
    css`
      background: linear-gradient(0deg, ${Colors.BIG_STONE}, ${Colors.CLOUD_BURST});
    `};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px 0px 0px 8px;

  @media (max-width: 767px) {
    border-radius: 8px 8px 0px 0px;
  }
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
const LinkWrapper = styled.a`
  color: white !important;
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
      <ColWrapper sm={{ span: 6 }} xs={{ span: 24 }} bg={1}>
        <SlideInLeftBox>
          {period && <TextWrapper>{period}</TextWrapper>}
          <TitleWrapper level={4}>
            {title}{' '}
            {link && (
              <Tooltip title={`Visit ${title}`}>
                <LinkWrapper href={link} aria-label={title}>
                  <ExternalLinkOutline size={20} />
                </LinkWrapper>
              </Tooltip>
            )}
          </TitleWrapper>
        </SlideInLeftBox>
      </ColWrapper>
      <ColWrapper sm={{ span: 18 }} xs={{ span: 24 }}>
        <SlideInRightBox xOffset={5}>{children}</SlideInRightBox>
      </ColWrapper>
    </Card>
  );
};

export default DetailCard;
