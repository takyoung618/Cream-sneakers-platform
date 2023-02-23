import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import HeaderContainer from "./header/header.container";
import NavigationContainer from "./navigation/Navigation.container";
import FooterContainer from "./footer/Footer.container";
import SideBar from "./sideBar";

interface ILayoutProps {
  children: ReactChild;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div``;

const HIDDEN_LANDING = ["/"];

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenLanding = HIDDEN_LANDING.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenLanding && (
        <Wrapper>
          <HeaderContainer />
          <NavigationContainer />
        </Wrapper>
      )}
      <Body>{props.children}</Body>
      <FooterContainer />
      {/* <SideBar/> */}
    </Wrapper>
  );
}
