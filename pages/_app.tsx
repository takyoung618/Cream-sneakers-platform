import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { useEffect, useState } from "react";
import animationData from "../public/walk-cycling-shoes.json";
import Router from "next/router";
import styled from "@emotion/styled";
import Lottie from "react-lottie";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles}></Global>
          {loading ? (
            <LoadingWrapper>
              <Lottie options={defaultOptions} width={300} height={300} />
            </LoadingWrapper>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
