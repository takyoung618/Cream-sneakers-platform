import * as S from "./Comment.Write.styles"
import { ICommentWritePresenter } from "./Comment.Write.types"

export default function CommentWritePresenter(props: ICommentWritePresenter){

    return (
        <S.Wrapper>
            <S.CommentWrapper>
                <S.CommentBox 
                onChange={props.onChangeContents}
                placeholder="내용을 입력해 주세요."
                value={
                    props.isEdit ? props.contents || props.el?.contents : props.contents
                }
                />
                <S.CommentCreateButton
                    onClick={
                        props.isEdit ? props.onClickEditComment : props.onClickCreateComment
                    }
                >작성하기
                </S.CommentCreateButton>
            </S.CommentWrapper>
            
        </S.Wrapper>
    )
}