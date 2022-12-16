import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

const LandingPageC = () => {
  const router = useRouter();

  const onClickToCrewList = () => {
    void router.push("/home");
  };
  return (
    <S.Container>
      <S.MainTextBox>
        <S.Logo>where is my sneakers?</S.Logo>
        <S.ShopBtn onClick={onClickToCrewList}>
          쇼핑하러가기
        </S.ShopBtn>
      </S.MainTextBox>
    </S.Container>
  );
};

export default LandingPageC;
