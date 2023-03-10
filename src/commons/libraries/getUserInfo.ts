import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      picture
      userPoint {
        amount
      }
    }
  }
`;

export function getUserInfo() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return data;
}
