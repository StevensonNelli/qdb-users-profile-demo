import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import logo from "../../assets/images/logo.png";
import {
  SideNav,
  ContentLayout,
  LogoWrapper,
  LogoContainer,
  MenuIcon,
} from "./Viewport.styled";
import UserMenu from "../../components/UserMenu/UserMenu";
import SideNavMenu from "../../components/SideNavMenu/SideNavMenu";
import AppHeader from "../../components/AppHeader/AppHeader";
import apiClient from "../../api/http-common";
import { User } from "../../types/User";

const Viewport: React.FC = () => {
  const [users, setUsers] = React.useState<User[] | []>([]);

  async function callUsers() {
    await apiClient
      .get(`${process.env.REACT_APP_BASE_URL}/users`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    callUsers();
  }, []);

  return (
    <Layout hasSider>
      <SideNav width={250}>
        <LogoWrapper>
          <LogoContainer
            style={{ backgroundImage: `url(${logo})` }}
          ></LogoContainer>

          <MenuIcon />
        </LogoWrapper>
        <UserMenu users={users} />
        <SideNavMenu />
      </SideNav>
      <ContentLayout>
        <AppHeader />
        {/* <CenterCard>
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
        </CenterCard> */}
        <Layout.Content style={{ padding: 24 }}>
          <Outlet />
        </Layout.Content>
      </ContentLayout>
    </Layout>
  );
};

export default Viewport;
