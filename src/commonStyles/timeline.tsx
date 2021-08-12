import { Timeline as AntdTimeline } from 'antd';
import styled, { css } from 'styled-components';

const TIMELINE_SECTION = 40;

type Props = {
  isLast?: boolean;
};

export const Timeline = styled(AntdTimeline)`
  width: 100%;
`;

export const TimelineItem = styled(AntdTimeline.Item)<Props>`
  .ant-timeline-item-label {
    width: calc(${TIMELINE_SECTION}% - 36px) !important;
  }
  .ant-timeline-item-tail {
    left: ${TIMELINE_SECTION}% !important;
  }
  .ant-timeline-item-head {
    left: ${TIMELINE_SECTION}% !important;
  }
  .ant-timeline-item-content {
    left: calc(${TIMELINE_SECTION}% - 4px) !important;
    width: calc(50% - 14px) !important;
    margin-left: 42px;
  }
  .ant-timeline-item-head {
    background: inherit;
  }
  ${({ isLast }) =>
    isLast &&
    css`
      padding-bottom: 0 !important;
    `};
`;
