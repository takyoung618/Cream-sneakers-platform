import { useRouter } from "next/router";
import * as S from "./landingPage.styles";

const LandingPageC = () => {
  const router = useRouter();

  const onClickToCrewList = () => {
    void router.push("/crews");
  };
  return (
    <S.Container>
      <S.MainTextBox>
        {/* <img src="/images/landing/" alt="위트레킹 레터" /> */}
        <S.Logo>where is my sneakers?</S.Logo>
        <S.CrewFindBtn onClick={onClickToCrewList}>
          쇼핑하러가기
        </S.CrewFindBtn>
      </S.MainTextBox>
    </S.Container>
  );
};

export default LandingPageC;
