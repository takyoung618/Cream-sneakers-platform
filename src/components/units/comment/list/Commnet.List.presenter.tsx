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
                //     <S.UserWrapper>
                //     <S.User>노은정</S.User>
                //     <S.Qusetion>사이즈가 더 큰 건 없나요?</S.Qusetion>
                // </S.UserWrapper>
                // <S.DateWrapper>
                //     <S.Date>2022. 03. 30</S.Date>
                //     <S.Icon src="/images/Comment.png"/>
                // </S.DateWrapper>
                ))}
            </InfiniteScroll>     
        </S.Wrapper>
    )
}