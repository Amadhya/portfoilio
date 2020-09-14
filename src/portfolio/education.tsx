import React from 'react';

import { EnvironmentFilled, ReadFilled, SignalFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import EduIcon from 'assets/edu_icon.png';
import DetailCard from 'common/detailCard';
import HeaderWrapper from 'commonStyles/header';
import { Separator, Container } from 'commonStyles/layouts';

const { Text } = Typography;

const education = [
    {
        title: "Bachelor's Degree",
        subTitle: 'B.Tech in Electronics & Communication',
        name: 'Punjab Engineering College',
        location: 'Chandigarh, India',
        result: 'CGPA: 8.1',
        extra:
            'Member of NSS, Rotaract Club and Robotics society. Was part of the publicity and discipline team of Pecfest.',
    },
    {
        title: 'Senior Secondary',
        subTitle: 'Non Medical',
        name: 'GMSSS-35',
        location: 'Chandigarh, India',
        result: '91.8%',
    },
    {
        title: 'High School',
        subTitle: '10th grade',
        name: 'Ryan International School',
        location: 'Chandigarh, India',
        result: 'CGPA: 9.8',
    },
];

const Education = () => (
    <Container id="education">
        <HeaderWrapper level={3} border={1} fontWeight={1}>
            <img src={EduIcon} alt="icon" />
            &nbsp; Education
        </HeaderWrapper>
        <Separator />
        {education.map(({ title, subTitle, name, location, result, extra }) => (
            <DetailCard title={title} key={name}>
                <div>
                    <HeaderWrapper level={4} color="black">
                        {subTitle}
                    </HeaderWrapper>
                    <Text strong>
                        <ReadFilled />
                        &nbsp; {name}
                    </Text>
                    <Separator />
                    <Text>
                        <EnvironmentFilled />
                        &nbsp; {location}
                    </Text>
                    <Separator />
                    <Text strong>
                        <SignalFilled />
                        &nbsp; {result}
                    </Text>
                    <Separator />
                    {extra && <Text strong>{extra}</Text>}
                </div>
            </DetailCard>
        ))}
    </Container>
);

export default Education;
