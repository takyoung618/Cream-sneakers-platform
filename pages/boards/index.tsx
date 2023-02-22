import { withAuth } from '../../src/components/commons/hocs/withAuth'
import BoardList from '../../src/components/units/board/list/BoardList.container'

function BoardsPage(){
    return <BoardList />
}

export default withAuth(BoardsPage)