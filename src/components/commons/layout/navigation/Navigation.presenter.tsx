import * as S from "./Navigation.styles"

export default function NavigationPresenter(props: any) {

    return (
        <S.Wrapper>
            <S.LogoImage
                onClick={props.MoveToHome}
            >CREAM</S.LogoImage>
            <S.CategoryWrapper>
                <S.Category
                    onClick={props.MoveToList}
                >STYLE
                </S.Category>
                <S.Category
                    onClick={props.MoveToList}
                >SHOP
                </S.Category>
                <S.Category
                    onClick={props.MoveToHome}
                >HOME
                </S.Category>
            </S.CategoryWrapper>
        </S.Wrapper>
    )
}