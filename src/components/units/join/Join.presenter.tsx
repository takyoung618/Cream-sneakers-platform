import * as S from "./Join.styles"

export default function JoinPresenter(props) {

    return (
        <form onSubmit={props.handleSubmit(props.onClickJoin)}>
            <S.Wrapper>
            <S.HeaderWrapper>
                <S.Title>JOIN MEMBER</S.Title>
            </S.HeaderWrapper>
            <S.JoinWrapper>
                <S.InputWrapper>
                    <S.Id>아이디</S.Id>
                    <S.Input 
                        placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                        {...props.register("email")}
                    />
                    <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Password>비밀번호</S.Password>
                    <S.Input 
                        type="password"
                        {...props.register("password")}
                        placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                    />
                     <S.ErrorMessage>
                        {props.formState.errors.password?.message}
                    </S.ErrorMessage>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.PasswordCheck>비밀번호 확인</S.PasswordCheck>
                    <S.InputCheck 
                        type="password"
                        {...props.register("passwordCheck")}
                        placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                    />
                     <S.ErrorMessage>
                        {props.formState.errors.passwordCheck?.message}
                    </S.ErrorMessage>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Name>이름</S.Name>
                    <S.Input 
                        {...props.register("name")}
                        placeholder="Ex) 홍길동"
                    />
                    <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
                </S.InputWrapper>
            </S.JoinWrapper>
            <S.FooterWrapper>
                <S.cancelButton type="button" onClick={props.onClickCancel}>취소</S.cancelButton>
                <S.JoinButton type="submit">확인</S.JoinButton>
            </S.FooterWrapper>
        </S.Wrapper>
        </form> 
    )
}