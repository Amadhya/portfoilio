import React from 'react';

import { Typography } from 'antd';
import styled from 'styled-components';

import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import PROJECTS from 'constants/projects';

const { Text } = Typography;

const UlWrapper = styled.ul`
  color: ${Colors.GRAY};
`;

const Projects = () => (
  <Container id="projects">
    <HeaderWrapper level={3} border={1} fontWeight={1}>
      Projects
    </HeaderWrapper>
    <Separator />
    {PROJECTS.map(({ title, under, period, desc, link }) => (
      <DetailCard title={title} period={period} key={title} link={link}>
        <div>
          <HeaderWrapper level={4} color="black">
            {under}
          </HeaderWrapper>
          <Separator />
          <UlWrapper>
            {desc.map((d: string) => (
              <li key={d}>
                <Text strong>{d}</Text>
              </li>
            ))}
          </UlWrapper>
        </div>
      </DetailCard>
    ))}
  </Container>
);

export default Projects;
