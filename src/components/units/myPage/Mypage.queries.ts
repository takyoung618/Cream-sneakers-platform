import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
        updateUser(updateUserInput: $updateUserInput) {
            name
            picture
        }
    }
`;

export const RESET_USER_PASSWORD = gql`
    mutation resetUserPassword($password: String!) {
        resetUserPassword(password: $password)
    }
`

export const FETCH_BOARDS_OF_MINE = gql`
    query fetchBoardsOfMine {
        fetchBoardsOfMine {
            _id
            writer
            title
            contents
            images
            createAt
        }
    }
`


