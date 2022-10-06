import * as S from "./JoinHeader.styles"
import { useRouter } from "next/router";



export default function JoinHeader() {
    const router = useRouter();

    const onClickLogo = () => {
        router.push("/")
    }

    const onClickLogin = () => {
        router.push("/login")
    }

    
    return (
        <S.Wrapper>
           <S.Image src="/images/white-logo 1.png" onClick={onClickLogo}/>
           <S.ContentsWrapper>
                <S.Brand>BRAND</S.Brand>
                <S.Category>CATEGORY</S.Category>
                <S.Life>LIFE</S.Life>
                <S.Beauty>BEAUTY</S.Beauty>
                <S.Line>|</S.Line>
                <S.Style>#STYLE</S.Style>
                <S.Event>EVENT</S.Event>
                <S.Best>BEST</S.Best>
                <S.Signup onClick={onClickLogin}>로그인</S.Signup>
                <S.Basket>장바구니</S.Basket>
                <S.BasketCount>
                    <S.Count>0</S.Count>
                </S.BasketCount>
            </S.ContentsWrapper>
        </S.Wrapper>
    )

}