import InfiniteScroll from "react-infinite-scroller"
import CommentEditContainer from "../edit/Commnet.Edit.container"
import * as S from "./Commnet.List.styles"
import { ICommentListPresenterProps } from "./Commnet.List.types"

export default function CommentListPresenter(props: ICommentListPresenterProps){

    return(
        <S.Wrapper>
            <InfiniteScroll
                pageStart={0}
                loadMore={props.FetchMoreQuestions}
                hasMore={true}
            >
                {props.QuestionsData?.fetchUseditemQuestions.map((el: any) => (
                    <CommentEditContainer
                        key={el._id}
                        el={el}
                        data={props.data}
                    ></CommentEditContainer>
                ))}
            </InfiniteScroll>     
        </S.Wrapper>
    )
}