import React from "react";
import { Layout } from "antd";
import {
  SideNav,
  ContentLayout,
  AppHeader,
  CenterCard,
  PlaceholderDiv,
} from "./Viewport.styled";

const Viewport: React.FC = () => {
  return (
    <Layout hasSider>
      <SideNav></SideNav>
      <ContentLayout>
        <AppHeader />
        <CenterCard>
          <PlaceholderDiv>
            <p>long CenterCard</p>
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </PlaceholderDiv>
        </CenterCard>
      </ContentLayout>
    </Layout>
  );
};

export default Viewport;
