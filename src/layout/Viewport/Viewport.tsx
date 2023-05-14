import React from "react";
import { Layout } from "antd";
import logo from "../../assets/images/logo.png";
import {
  SideNav,
  ContentLayout,
  CenterCard,
  PlaceholderDiv,
  LogoWrapper,
  LogoContainer,
  MenuIcon,
} from "./Viewport.styled";
import UserMenu from "../../components/UserMenu/UserMenu";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import AppHeader from "../../components/AppHeader/AppHeader";

const Viewport: React.FC = () => {
  return (
    <Layout hasSider>
      <SideNav width={250}>
        <LogoWrapper>
          <LogoContainer
            style={{ backgroundImage: `url(${logo})` }}
          ></LogoContainer>

          <MenuIcon />
        </LogoWrapper>
        <UserMenu />
        <SideNavMenu />
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
