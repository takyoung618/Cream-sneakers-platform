import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/boardComment/write/BoardCommentWrite.container";
import BoardCommentList from "../../../src/components/units/boardComment/list/BoardCommentList.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}

export default withAuth(BoardDetailPage);
