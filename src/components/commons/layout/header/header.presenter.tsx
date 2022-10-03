import * as S from "./header.styles"

export default function HeaderPresenter(props) {

    return (
            <S.Wrapper>
                <S.LogoImage src="/images/dingco-logo.png"/>
                <S.HeaderWrapper>
                    <S.Login onClick={props.onClickLogin}>로그인</S.Login>
                    <S.Signup onClick={props.onClickJoin}>회원가입</S.Signup>
                    <S.Basket>장바구니</S.Basket>
                    <S.BasketCount>
                        <S.Count>0</S.Count>
                    </S.BasketCount>
                </S.HeaderWrapper>
            </S.Wrapper>
    )
}