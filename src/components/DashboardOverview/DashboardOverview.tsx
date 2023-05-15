import { Typography, Watermark } from "antd";
import React from "react";
const { Paragraph } = Typography;

interface WatermarkConfig {
  content: string;
  color: string;
  fontSize: number;
  zIndex: number;
  rotate: number;
  gap: [number, number];
  offset?: [number, number];
}

const DashboardOverview = () => {
  const [config, setConfig] = React.useState<WatermarkConfig>({
    content: "Ant Design",
    color: "rgba(0, 0, 0, 0.15)",
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;

  const watermarkProps = React.useMemo(
    () => ({
      content,
      font: {
        color,
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config]
  );
  return (
    <Watermark {...watermarkProps}>
      <Typography>
        <Paragraph>
          The light-speed iteration of the digital world makes products more
          complex. However, human consciousness and attention resources are
          limited. Facing this design contradiction, the pursuit of natural
          interaction will be the consistent direction of Ant Design.
        </Paragraph>
        <Paragraph>
          Natural user cognition: According to cognitive psychology, about 80%
          of external information is obtained through visual channels. The most
          important visual elements in the interface design, including layout,
          colors, illustrations, icons, etc., should fully absorb the laws of
          nature, thereby reducing the user&apos;s cognitive cost and bringing
          authentic and smooth feelings. In some scenarios, opportunely adding
          other sensory channels such as hearing, touch can create a richer and
          more natural product experience.
        </Paragraph>
        <Paragraph>
          Natural user behavior: In the interaction with the system, the
          designer should fully understand the relationship between users,
          system roles, and task objectives, and also contextually organize
          system functions and services. At the same time, a series of methods
          such as behavior analysis, artificial intelligence and sensors could
          be applied to assist users to make effective decisions and reduce
          extra operations of users, to save users&apos; mental and physical
          resources and make human-computer interaction more natural.
        </Paragraph>
      </Typography>
      <img
        style={{
          zIndex: 10,
          width: "100%",
          maxWidth: 800,
          position: "relative",
        }}
        src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
        alt="示例图片"
      />
    </Watermark>
  );
};

export default DashboardOverview;
