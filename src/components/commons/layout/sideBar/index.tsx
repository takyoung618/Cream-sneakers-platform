import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodayState } from "../../../../commons/store";
import { IUseditem } from "../../../../commons/types/generated/types";
import { localStorageDate } from "../../libraries/utils";

const TodayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 235px;
  border: 1px dotted gray;
  margin: 50px 25px 0px 25px;
  position: fixed;
  background-color: white;
`;

const TodayTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 120px;
  font-weight: 500;
  font-size: 16px;
  margin: 5px 0 10px 0;
`;
const TodayDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 85px;
  height: 85px;
  margin-bottom: 10px;
`;

const TodayImage = styled.img`
  width: 85px;
  height: 85px;
`;

const BlankTitle = styled.div`
  font-size: 12px;
  color: gray;
  width: 70px;
  display: flex;
  text-align: center;
`;

const BlankImage = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 30px;
`;

export default function SideBar() {
  // Date() 생성자 -> 로컬 PC에 저장된 현재 날짜 및 시간 데이터를 얻어온다
  const date = new Date();
  const [todays, setTodays] = useState<IUseditem[]>([]);

  // lookToday는 TodayState의 value를 가지며, setLookToday는 TodayState의 값을 변경할 수 있다.
  const [lookToday, setLookToday] = useRecoilState(TodayState);

  const router = useRouter();

  useEffect(() => {
    // JSON.parse를 사용해 문자열을 원래 타입으로 변환
    const result = JSON.parse(
      // 세션에서 값 가져오기
      sessionStorage.getItem(String(localStorageDate(date))) || "[]"
    );
    setTodays(result);
  }, [lookToday]);

  const isEmpty = todays.length === 0;

  return (
    <TodayWrapper>
      <TodayTitle>최근 본 상품</TodayTitle>
      {!isEmpty ? (
        <>
          {todays.map((el) => (
            <TodayDiv key={el._id}>
              <TodayImage
                src={
                  el.images?.[0] || el.images?.[1]
                    ? `http://storage.googleapis.com/${el.images?.[0]}`
                    : `/images/기본이미지.png`
                }
              ></TodayImage>
            </TodayDiv>
          ))}
        </>
      ) : (
        <>
          <BlankImage src="/images/Invisible.jpg" />
          <BlankTitle>최근 본 상품이 없습니다.</BlankTitle>
        </>
      )}
    </TodayWrapper>
  );
}
