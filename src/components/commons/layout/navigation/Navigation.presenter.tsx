import * as S from "./Navigation.styles"

export default function NavigationPresenter() {

    return (
        <S.Wrapper>
            <S.ContentsWrapper>
                <S.Brand>BRAND</S.Brand>
                <S.Category>CATEGORY</S.Category>
                <S.Life>LIFE</S.Life>
                <S.Beauty>BEAUTY</S.Beauty>
                <S.Line>|</S.Line>
                <S.Style>#STYLE</S.Style>
                <S.Event>EVENT</S.Event>
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}