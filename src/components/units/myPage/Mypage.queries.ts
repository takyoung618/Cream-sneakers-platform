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

// // 내가 쓴 보드 게시글
// export const FETCH_BOARDS_OF_MINE = gql`
//     query fetchBoardsOfMine {
//         fetchBoardsOfMine {
//             _id
//             writer
//             title
//             contents
//             youtubeUrl
//             likeCount
//             dislikeCount
//             Images
//             user
//             createAt
//         }
//     }
// `

// 포인트 충전 내역
export const FETCH_POINT_TRANSACTIONS = gql`
    query fetchPointTransactions($search: String $page: Int) {
        fetchPointTransactions(search: $search page: $page) {
            _id
            amount
            user {
                name
            }
            createAt
        }
    }
`

// 내가 구매한 상품
export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
    query fetchPointTransactionsOfBuying ($search: String $page: Int) {
        fetchPointTransactionsOfBuying(search: $search page: $page) {
            _id
            amount
            useditem {
                name
                price
                images
            }
        }
    }
`

// 내가 판매한 상품
export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
    query fetchPointTransactionsOfSelling($search: String $page: Int) {
        fetchPointTransactionsOfSelling(search: $search page: $page) {
            _id
            amount
            useditem {
                name
                price
                images
            }
        }
    }
`



