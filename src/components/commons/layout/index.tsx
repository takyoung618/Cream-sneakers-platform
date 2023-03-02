import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import HeaderContainer from "./header/header.container";
import NavigationContainer from "./navigation/Navigation.container";
import FooterContainer from "./footer/Footer.container";
import SideBar from "./sideBar";
import HomeSliderPage from "../../units/market/home/slider";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div``;

const HIDDEN_LANDING = ["/"];

const HIDDEN_HOME = ["/home"];

const HIDDEN_SIDEBAR = [
  "/",
  "/home",
  "/join",
  "/login",
  "/brand/create",
  "/boards/new",
];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLanding = HIDDEN_LANDING.includes(router.asPath);
  const isHiddenSideBar = HIDDEN_SIDEBAR.includes(router.asPath);
  const isHiddenHome = HIDDEN_HOME.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenLanding && (
        <Wrapper>
          <HeaderContainer />
          <NavigationContainer />
        </Wrapper>
      )}
      {isHiddenHome && <HomeSliderPage />}
      <div style={{ display: "flex", flexDirection: "row" }}>
        {!isHiddenSideBar && <SideBar />}
        <Body>{props.children}</Body>
      </div>
      <FooterContainer />
    </Wrapper>
  );
}
