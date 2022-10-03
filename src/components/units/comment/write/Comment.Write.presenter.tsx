import * as S from "./Comment.Write.styles"

export default function CommnetWritePresenter(){

    return (
        <S.Wrapper>
            <S.InputWrapper>
                <S.CommentBox placeholder="내용을 입력해 주세요."/>
            </S.InputWrapper>
            <S.CommentCreateButton>작성하기</S.CommentCreateButton>
        </S.Wrapper>
    )
}