import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

const LandingPageB = () => {
  const router = useRouter();

  const onClickMoveToBoard = () => {
    router.push("/boards")
  }

  const onClickMoveToShop = () => {
    router.push("/main")
  }

  return (

    <S.ContainerB>
      <S.TopContents>
        <S.TopLeft>
          <S.TextBox>
            <S.TextTitle>Consumer Insight</S.TextTitle>
            <S.Text>
            Know your consumers and stay ahead of lifestyle shifts with unrivalled insight into the way they’ll think, feel and behave for years to come.
            </S.Text>
          </S.TextBox>
          <S.TopButton
            onClick={onClickMoveToBoard}
          >
            Explore Community →
          </S.TopButton>
        </S.TopLeft>
        <S.TopImage src="/images/landingPage/sneakers.png" />
      </S.TopContents>
      <S.BottomContents>
        <S.TopImage src="/images/landingPage/HPB5I7.jpeg"/>
        <S.BottomRight>
          <S.TextBox>
              <S.TextTitle2>Trading</S.TextTitle2>
              <S.Text2>
              Accurately land products at the right time, in the right volumes with effective retail and communication strategies and predictive data analytics.
              </S.Text2>
            </S.TextBox>
            <S.BottomButton
              onClick={onClickMoveToShop}
            >
              Explore Trading →
            </S.BottomButton>
        </S.BottomRight>
        
      </S.BottomContents>
    </S.ContainerB>
  );
};

export default LandingPageB;
