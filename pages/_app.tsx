import '../styles/globals.css'
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
