import * as S from "./Join.styles"

export default function JoinPresenter() {

    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.Title>JOIN MEMBER</S.Title>
            </S.HeaderWrapper>
            <S.JoinWrapper>
                <S.InputWrapper>
                    <S.Id>아이디</S.Id>
                    <S.Input placeholder="이메일 아이디를 @까지 정확하게 입력하세요"/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Password>비밀번호</S.Password>
                    <S.Input placeholder="영문+숫자 조합 8~16자리를 입력해주세요."/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PasswordCheck>비밀번호 확인</S.PasswordCheck>
                    <S.InputCheck placeholder="영문+숫자 조합 8~16자리를 입력해주세요."/>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Name>이름</S.Name>
                    <S.Input placeholder="ex) 홍길동"/>
                </S.InputWrapper>
            </S.JoinWrapper>
            <S.FooterWrapper>
                <S.cancelButton>취소</S.cancelButton>
                <S.JoinButton>확인</S.JoinButton>
            </S.FooterWrapper>
        </S.Wrapper>
    )
}