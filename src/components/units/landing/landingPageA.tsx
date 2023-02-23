import * as S from "./landingPage.styles";

const LandingPageA = () => {
  return (
    <S.Container
      style={{ backgroundImage: `url("/images/landingPage/skateboard.png")` }}
    >
      <S.MainTitle>
        한정판 스니커즈는 CREAM에서 바로 구매! 100% 정품 cream.
      </S.MainTitle>
      <S.ScrollBox>
        <S.ScrollIcon
          src="/images/landingPage/down-arrow.png"
          alt="화살이미지"
        />
      </S.ScrollBox>
    </S.Container>
  );
};

export default LandingPageA;
