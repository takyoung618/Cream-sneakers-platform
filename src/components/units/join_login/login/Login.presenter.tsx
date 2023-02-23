import * as S from "./Login.styles";
import { ILoginPresenterProps } from "./Login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.LogoImage>CREAM</S.LogoImage>
          <S.LogoTitle>KICKS RULE EVERYTHING AROUND ME</S.LogoTitle>
        </S.LogoWrapper>
        <S.EmailWrapper>
          <S.EmailTitle>이메일 주소</S.EmailTitle>
          <S.EmailInput
            placeholder="예) Cream@Cream.co.kr"
            {...props.register("email")}
            autoComplete="off"
          />
          <S.EmailErrorMessage>
            {props.formState.errors.email?.message}
          </S.EmailErrorMessage>
        </S.EmailWrapper>
        <S.PasswordWrapper>
          <S.PasswordTitle>비밀번호</S.PasswordTitle>
          <S.EmailInput
            type="password"
            {...props.register("password")}
            autoComplete="off"
          />
          <S.PasswordErrorMessage>
            {props.formState.errors.password?.message}
          </S.PasswordErrorMessage>
        </S.PasswordWrapper>
        <S.LogoWrapper>
          <S.LoginBtn type="submit">로그인</S.LoginBtn>
        </S.LogoWrapper>
        <S.SignUpWrapper onClick={props.onClickMoveJoin}>
          <S.SignUp>이메일 가입</S.SignUp>
          <S.SignUp>|</S.SignUp>
          <S.SignUp>이메일 찾기</S.SignUp>
          <S.SignUp>|</S.SignUp>
          <S.SignUp>비밀번호 찾기</S.SignUp>
        </S.SignUpWrapper>
        <S.FooterWrapper>
          <S.BtnWrapper>
            <S.Icon src="images/login/naver.png" />
            <S.LoginText>네이버로 로그인</S.LoginText>
          </S.BtnWrapper>
          <S.BtnWrapper>
            <S.Kakao src="images/login/kakaotalk.png" />
            <S.LoginText>카카오톡으로 로그인</S.LoginText>
          </S.BtnWrapper>
        </S.FooterWrapper>
      </S.Wrapper>
    </form>
  );
}
