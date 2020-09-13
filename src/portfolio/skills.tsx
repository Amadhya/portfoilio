import React from 'react';

import { ToolOutlined } from '@ant-design/icons';
import { Typography, Col } from 'antd';
import HeaderWrapper from 'commonStyles/header';
import { Row, Separator, Container } from 'commonStyles/layouts';
import styled from 'styled-components';

const { Text } = Typography;

const TextWrapper = styled(Text)`
    text-align: center;
    color: white;
`;
const Wrapper = styled(Container)`
    background: black;
`;
const UlWrapper = styled.ul`
    color: #8c8c8c;
`;

const skills = {
    languages: ['Cpp', 'C', 'Python'],
    frontend: ['ReactJS', 'HTML', 'CSS', 'Javascript', 'Typescript', 'Material-UI', 'Antd'],
    backend: ['DJango', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL'],
    tools_used: ['Git', 'npm', 'Nivo.rocks', 'ESlint'],
};

const Skills = () => (
    <Wrapper id="skill_set">
        <HeaderWrapper level={3} border={1} color="white" fontWeight={1}>
            <ToolOutlined />
            &nbsp; Skill Set
        </HeaderWrapper>
        <Separator height={4} />
        <Row gutter={[24, 12]}>
            <Col sm={{ span: 4, offset: 4 }}>
                <HeaderWrapper level={4} color="white">
                    Languages
                </HeaderWrapper>
                <Separator />
                <UlWrapper>
                    {skills.languages.map((skill: string) => (
                        <li key={skill}>
                            <TextWrapper strong>{skill}</TextWrapper>
                        </li>
                    ))}
                </UlWrapper>
            </Col>
            <Col sm={{ span: 4 }}>
                <HeaderWrapper level={4} color="white">
                    Frontend
                </HeaderWrapper>
                <Separator />
                <UlWrapper>
                    {skills.frontend.map((skill: string) => (
                        <li key={skill}>
                            <TextWrapper strong>{skill}</TextWrapper>
                        </li>
                    ))}
                </UlWrapper>
            </Col>
            <Col sm={{ span: 4 }}>
                <HeaderWrapper level={4} color="white">
                    Backend
                </HeaderWrapper>
                <Separator />
                <UlWrapper>
                    {skills.backend.map((skill: string) => (
                        <li key={skill}>
                            <TextWrapper strong>{skill}</TextWrapper>
                        </li>
                    ))}
                </UlWrapper>
            </Col>
            <Col sm={{ span: 4 }}>
                <HeaderWrapper level={4} color="white">
                    Tools Used
                </HeaderWrapper>
                <Separator />
                <UlWrapper>
                    {skills.tools_used.map((skill: string) => (
                        <li key={skill}>
                            <TextWrapper strong>{skill}</TextWrapper>
                        </li>
                    ))}
                </UlWrapper>
            </Col>
        </Row>
    </Wrapper>
);

export default Skills;
