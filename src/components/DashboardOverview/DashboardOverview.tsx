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
    content: "Qatar Development Bank",
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
          QDB Banking services are designed to cater to the financial needs of
          individuals, businesses, and governments. Banks provide a variety of
          services to their clients, including but not limited to:
        </Paragraph>
        <Paragraph>
          Deposits: QDB accept deposits from individuals and businesses and pay
          interest on the deposited amount. Deposits can be in the form of
          savings accounts, current accounts, fixed deposits, and recurring
          deposits.
        </Paragraph>
        <Paragraph>
          Loans: QDB provide loans to individuals and businesses for various
          purposes, such as education, housing, and business expansion. The
          interest rates on loans vary depending on the type of loan and the
          borrower's creditworthiness.
        </Paragraph>
        <Paragraph>
          Credit cards: Banks issue credit cards to their clients that allow
          them to make purchases on credit. Credit cards come with various
          benefits, such as rewards and cashback offers.
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
      <Typography>
        <Paragraph>
          Investment services: Banks offer investment services such as mutual
          funds, stocks, bonds, and other investment options. These services
          help clients grow their wealth and achieve their financial goals.
        </Paragraph>
        <Paragraph>
          Foreign exchange services: Banks provide foreign exchange services to
          their clients, which include currency exchange, traveler's checks, and
          international money transfers.
        </Paragraph>
        <Paragraph>
          Insurance services: Banks also offer insurance products such as life
          insurance, health insurance, and general insurance to help their
          clients protect themselves and their assets.
        </Paragraph>
        <Paragraph>
          Online banking: With the advent of technology, most banks now offer
          online banking services, allowing clients to access their accounts and
          perform transactions from anywhere at any time. Overall, banks play a
          critical role in the financial well-being of their clients by
          providing them with various financial services and products to meet
          their needs.
        </Paragraph>
      </Typography>
    </Watermark>
  );
};

export default DashboardOverview;
