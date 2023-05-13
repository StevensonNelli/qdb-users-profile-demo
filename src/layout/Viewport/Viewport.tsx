import React from "react";
import { Layout } from "antd";

import {
  SideNav,
  ContentLayout,
  AppHeader,
  CenterCard,
  PlaceholderDiv,
  LogoWrapper,
  LogoContainer,
  LogoDescription,
} from "./Viewport.styled";
import UserMenu from "../../components/UserMenu/UserMenu";

const Viewport: React.FC = () => {
  return (
    <Layout hasSider>
      <SideNav width={250}>
        <LogoWrapper>
          <LogoContainer>QDB</LogoContainer>
          <LogoDescription>Qatar Development Bank</LogoDescription>
        </LogoWrapper>
        <UserMenu />
      </SideNav>
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
