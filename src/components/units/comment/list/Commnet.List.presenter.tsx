import * as S from "./Commnet.List.styles"

export default function CommentListPresenter(){

    return(
        <S.Wrapper>
            <S.UserWrapper>
                <S.User>노은정</S.User>
                <S.Qusetion>사이즈가 더 큰 건 없나요?</S.Qusetion>
            </S.UserWrapper>
            <S.DateWrapper>
                <S.Date>2022. 03. 30</S.Date>
                <S.Icon src="/images/Comment.png"/>
            </S.DateWrapper>
        </S.Wrapper>
    )
}