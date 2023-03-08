import ButtonJoin from "../../../commons/buttons/buttonJoin";
import * as S from "./Join.styles";
import { IJoinPresenterProps } from "./Join.types";

export default function JoinPresenter(props: IJoinPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickJoin)}>
      <S.JoinWrapper>
        <S.Wrapper>
          <S.LogoWrapper>
            <S.LogoImage>회원가입</S.LogoImage>
          </S.LogoWrapper>
          <S.EmailWrapper>
            <S.EmailTitle>이메일 주소*</S.EmailTitle>
            <S.EmailInput
              placeholder="예)Kream@Kream.co.kr"
              {...props.register("email")}
              autoComplete="off"
            />
            <S.ErrorMessage>
              {props.formState.errors.email?.message}
            </S.ErrorMessage>
          </S.EmailWrapper>
          <S.PasswordWrapper>
            <S.PasswordTitle>비밀번호*</S.PasswordTitle>
            <S.EmailInput
              type="password"
              {...props.register("password")}
              placeholder="영문, 숫자 조합 8~16자"
              autoComplete="off"
            />
            <S.ErrorMessage>
              {props.formState.errors.password?.message}
            </S.ErrorMessage>
          </S.PasswordWrapper>
          <S.PasswordWrapper>
            <S.PasswordTitle>비밀번호 확인*</S.PasswordTitle>
            <S.EmailInput
              type="password"
              {...props.register("passwordCheck")}
              placeholder="영문, 숫자 조합 8~16자 "
            />
            <S.ErrorMessage>
              {props.formState.errors.passwordCheck?.message}
            </S.ErrorMessage>
          </S.PasswordWrapper>
          <S.PasswordWrapper>
            <S.SizeTitle>유저 이름</S.SizeTitle>
            <S.EmailInput
              {...props.register("name")}
              placeholder="입력하세요"
              autoComplete="off"
            />
            <S.ErrorMessage>
              {props.formState.errors.name?.message}
            </S.ErrorMessage>
          </S.PasswordWrapper>

          <S.FirstCheckWrapper>
            <S.CheckBox type="checkbox" />
            <S.Agree>[선택] 광고성 정보 수신에 모두 동의합니다.</S.Agree>
          </S.FirstCheckWrapper>

          <S.LogoWrapper>
            <ButtonJoin
              title="회원가입"
              onClick={props.onClickJoin}
              isActive={props.formState.isValid}
            />
          </S.LogoWrapper>
        </S.Wrapper>
      </S.JoinWrapper>
    </form>
  );
}
