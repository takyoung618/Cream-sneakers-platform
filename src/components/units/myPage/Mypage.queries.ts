import { gql } from "graphql-tag";

export const UPDATE_USER = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
        updateUser(updateUserInput: $updateUserInput) {
            _id
            email
            name
            picture
        }
    }
`;