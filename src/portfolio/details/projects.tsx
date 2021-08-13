import React from 'react';

import { Typography, Tag } from 'antd';
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

const StyledTag = styled(Tag)`
  border-radius: 18px;
  padding: 2px 8px;
  margin: 4px;
`;

const Projects = () => (
  <Container id="projects">
    <StyledTitle level={3} border={1} fontWeight={1}>
      Projects
    </StyledTitle>
    <Separator />
    {PROJECTS.map(({ title, under, period, desc, link, technologies }: any) => (
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
          {technologies.map(({ Icon, color, text, image }: any) => (
            <StyledTag
              icon={
                Icon ? (
                  <Icon size={16} color="white" />
                ) : (
                  <img src={image} width={16} height={16} alt={text} />
                )
              }
              color={color}
              key={`${text}-${color}`}
            >
              &nbsp;{text}
            </StyledTag>
          ))}
        </div>
      </DetailCard>
    ))}
  </Container>
);

export default Projects;
