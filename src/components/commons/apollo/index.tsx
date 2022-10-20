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
import { accessTokenState } from "../../../commons/store";

interface IApolloSettingProps {
  children: ReactNode;
}

const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);

              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}




// import {
//   ApolloClient,
//   ApolloLink,
//   ApolloProvider,
//   fromPromise,
//   InMemoryCache,
// } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";
// import { createUploadLink } from "apollo-upload-client";

// import { ReactNode, useEffect } from "react";
// import { useRecoilState } from "recoil";
// import {
//   accessTokenState,
//   logInStatusState,
//   userInfoState,
// } from "../../../commons/store";
// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// // import { getUserInfo } from "../../../commons/lib/getUserInfo";

// const APOLLO_CACHE = new InMemoryCache();

// interface IApolloSettingProps {
//   children: ReactNode;
// }
// export default function ApolloSetting(props: IApolloSettingProps) {
//   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
//   const [userInfo, setUserInfo] = useRecoilState(userInfoState);
//   const [isLogout, setIsLogout] = useRecoilState(logInStatusState);

//   useEffect(() => {
//       const logout = localStorage.getItem("log") || "";
//       if (!logout) return setIsLogout(true);
//       setIsLogout(JSON.parse(logout).logoutUser);
//       getAccessToken().then((newAccessToken) => {
//           setAccessToken(newAccessToken);
//         //   getUserInfo(newAccessToken).then((newUserInfo) => {
//         //       setUserInfo(newUserInfo);
//         //   });
//       });
//   }, []);

//   const errorLink = onError(({ graphQLErrors, operation, forward }) => {
//       if (graphQLErrors) {
//           for (const err of graphQLErrors) {
//               if (err.extensions.code === "UNAUTHENTICATED") {
//                   return fromPromise(
//                       getAccessToken().then((newAccessToken) => {
//                           setAccessToken(newAccessToken);
//                           operation.setContext({
//                               headers: {
//                                   ...operation.getContext().headers,
//                                   Authorization: `Bearer ${newAccessToken}`,
//                               },
//                           });
//                       })
//                   ).flatMap(() => forward(operation));
//               }
//           }
//       }
//   });

//   const uploadLink = createUploadLink({
//       uri: "https://backend08.codebootcamp.co.kr/graphql",
//       headers: { Authorization: `Bearer ${accessToken}` },
//       credentials: "include",
//   });

//   const client = new ApolloClient({
//       link: ApolloLink.from([errorLink, uploadLink]),
//       cache: APOLLO_CACHE,
//       connectToDevTools: true,
//   });

//   return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
// }

