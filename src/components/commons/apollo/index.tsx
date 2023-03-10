import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, userInfoState } from "../../../commons/store";

interface IApolloSettingProps {
  children: ReactNode;
}

const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (!userInfo) return;
    // 에러 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 토큰 만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // refreshToken으로 accessToken을 재발급 받기
            getAccessToken().then((newAccessToken: string) => {
              // 재발급 받은 accessToken 저장하기
              setAccessToken(newAccessToken);
              // 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기(토큰 바꿔치기)
              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기(변경된 operation 재요청하기!!!)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend10.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
