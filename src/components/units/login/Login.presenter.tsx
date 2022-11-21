import * as S from "./Login.styles"
import { ILoginPresenterProps } from "./Login.types"

export default function LoginPresenter(props: ILoginPresenterProps) {

    return (
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
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
                        <S.InputId 
                        placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                        {...props.register("email")}
                        />
                        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
                        <S.InputPassword
                        placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                        {...props.register("password")}
                        />
                         <S.ErrorMessage>
                        {props.formState.errors.password?.message}
                        </S.ErrorMessage>
                    </S.InputWrapper>
                    <S.LoginButton type="submit">로그인</S.LoginButton>
                </S.LoginWrapper>
            </S.Wrapper>
        </form> 
    )
}