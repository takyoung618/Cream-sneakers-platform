import * as S from "./Navigation.styles"

export default function NavigationPresenter(props) {

    return (
        <S.Wrapper>
            <S.ContentsWrapper>
                <S.Brand
                    onClick={props.MoveToList}
                >BRAND</S.Brand>
                <S.Category
                    onClick={props.MoveToList}
                >CATEGORY</S.Category>
                <S.Life
                    onClick={props.MoveToList}
                >LIFE</S.Life>
                <S.Beauty
                    onClick={props.MoveToList}
                >BEAUTY</S.Beauty>
                <S.Line
                    onClick={props.MoveToList}
                >|</S.Line>
                <S.Style
                    onClick={props.MoveToList}
                >#STYLE</S.Style>
                <S.Event
                    onClick={props.MoveToList}
                >EVENT</S.Event>
            </S.ContentsWrapper>
        </S.Wrapper>
    )
}