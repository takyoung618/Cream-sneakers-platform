import * as S from "./Login.styles"

export default function LoginPresenter() {

    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.Login>LOGIN</S.Login>
            </S.HeaderWrapper>
            <S.LoginWrapper>
                <S.TitleWrapper>
                    <S.TitleId>아이디</S.TitleId>
                    <S.TitlePassword>비밀번호</S.TitlePassword>
                </S.TitleWrapper>
                <S.InputWrapper>
                    <S.InputId placeholder="이메일 아이디를 @까지 정확하게 입력하세요"/>
                    <S.InputPassword placeholder="영문+숫자 조합 8~16자리를 입력해주세요."/>
                </S.InputWrapper>
                <S.LoginButton>로그인</S.LoginButton>
            </S.LoginWrapper>
        </S.Wrapper>
    )
}