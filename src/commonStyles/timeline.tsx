import { Timeline as AntdTimeline } from 'antd';
import styled, { css } from 'styled-components';

import COLORS, { toRGBA } from 'constants/colors';

const TIMELINE_SECTION = 40;

type Props = {
  islast?: number;
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
    border: 1px dashed ${toRGBA(COLORS.CLOUD_BURST, 0.3)};
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
  ${({ islast }) =>
    islast &&
    css`
      padding-bottom: 0 !important;
    `};
`;
