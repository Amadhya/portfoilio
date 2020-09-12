import React from 'react';

import { ExperimentFilled, EnvironmentFilled } from '@ant-design/icons';
import { Typography } from 'antd';
import DetailCard from 'common/detailCard';
import { Separator, Container } from 'commonStyles/layouts';
import styled from 'styled-components';

const { Title, Text } = Typography;

const TitleWrapper = styled(Title)`
    margin-bottom: 4px !important;
`;

const education = [
    {
        period: 'Aug, 2020 - PRESENT',
        title: 'Cuemath',
        subTitle: 'Software Developer',
        location: 'Bangalore, India',
        desc:
            'Develop and maintain features for the online leap platform for teachers and students.',
    },
    {
        period: 'April, 2020 - PRESENT',
        title: 'SwyftCart',
        subTitle: 'Software Developer',
        location: 'Chandigarh, India',
        desc: 'Design, develop and maintain features for the ecommerce and the admin platform.',
    },
    {
        period: 'Jan, 2019 - Jun, 2019',
        title: 'Cuemath',
        subTitle: 'Software Developer Intern',
        location: 'Bangalore, India',
        desc:
            "FullStack developer for the Cuemath website. Developed various landing pages, services and api's.",
    },
    {
        period: 'May, 2018 - Sep, 2018',
        title: 'Coding Ninjas',
        subTitle: 'Teaching Assistant',
        location: 'New Delhi, India',
        desc:
            'Mentored a group of fifteen to twenty students in completing their course and other career related queries. Worked over different Data structures and algorithm problems.',
    },
];

const WorkExp = () => (
    <Container>
        <Title level={3}>
            <ExperimentFilled />
            &nbsp; Work Experience
        </Title>
        {education.map(({ title, subTitle, period, location, desc }) => (
            <DetailCard title={title} period={period} key={period}>
                <div>
                    <TitleWrapper level={4}>{subTitle}</TitleWrapper>
                    <Text>
                        <EnvironmentFilled />
                        &nbsp; {location}
                    </Text>
                    <Separator />
                    <Text strong> {desc}</Text>
                </div>
            </DetailCard>
        ))}
    </Container>
);

export default WorkExp;
