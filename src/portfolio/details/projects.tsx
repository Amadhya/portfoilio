import React from 'react';

import { Typography } from 'antd';
import styled from 'styled-components';

import DetailCard from 'common/detailCard';
import StyledTitle from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';
import Colors from 'constants/colors';
import PROJECTS from 'constants/projects';

const { Text } = Typography;

const StyledUl = styled.ul`
  color: ${Colors.GRAY};
`;

const Projects = () => (
  <Container id="projects">
    <StyledTitle level={3} border={1} fontWeight={1}>
      Projects
    </StyledTitle>
    <Separator />
    {PROJECTS.map(({ title, under, period, desc, link }) => (
      <DetailCard title={title} period={period} key={title} link={link}>
        <div>
          <StyledTitle level={4} color="black">
            {under}
          </StyledTitle>
          <Separator />
          <StyledUl>
            {desc.map((d: string) => (
              <li key={d}>
                <Text strong>{d}</Text>
              </li>
            ))}
          </StyledUl>
        </div>
      </DetailCard>
    ))}
  </Container>
);

export default Projects;
