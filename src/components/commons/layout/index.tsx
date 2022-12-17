import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactChild } from "react";
import HeaderContainer from "./header/header.container";
import NavigationContainer from "./navigation/Navigation.container";
import FooterContainer from "./footer/Footer.container";

interface ILayoutProps {
    children: ReactChild;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Body = styled.div`
`

const HIDDEN_LAYOUTS = [
    "/",
]

export default function Layout(props: ILayoutProps) {
    const router = useRouter();
    const isHiddenLayouts = HIDDEN_LAYOUTS.includes(router.asPath)
    
    return (
        <Wrapper>
            {!isHiddenLayouts && (
                <Wrapper>
                    <HeaderContainer/>
                    <NavigationContainer/>
                </Wrapper> 
            )}
            <Body>{props.children}</Body>
            <FooterContainer/>
        </Wrapper>
    )
}