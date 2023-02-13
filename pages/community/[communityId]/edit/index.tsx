import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../../src/commons/types/generated/types";
import CommunityWriteContainer from "../../../../src/components/units/community/write/CommunityWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function CommunityEditPage() {
    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        { variables: { boardId: String(router.query.boardId) } }
    );

    return <CommunityWriteContainer isEdit={true} data={data}/>
}