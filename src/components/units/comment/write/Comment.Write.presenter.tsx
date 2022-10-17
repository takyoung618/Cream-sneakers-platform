import * as S from "./Comment.Write.styles"
import { ICommentWritePresenter } from "./Comment.Write.types"

export default function CommentWritePresenter(props: ICommentWritePresenter){

    return (
        <S.Wrapper>
            <S.InputWrapper>
                <S.CommentBox 
                onChange={props.onChangeContents}
                placeholder="내용을 입력해 주세요."/>
            </S.InputWrapper>
            <S.CommentCreateButton
                onClick={props.onClickCreateComment}
            >작성하기</S.CommentCreateButton>
        </S.Wrapper>
    )
}