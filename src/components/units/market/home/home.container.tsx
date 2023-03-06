import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { TodayState } from "../../../../commons/store";
import { IUseditem } from "../../../../commons/types/generated/types";
import { localStorageDate } from "../../../commons/libraries/utils";
import { FETCH_USEDITEMS } from "../main/Main.queries";
import HomePresenter from "./home.presenter";
import { IHomePageContainerProps } from "./home.types";

export default function HomeContainer(props: IHomePageContainerProps) {
  const { data } = useQuery(FETCH_USEDITEMS);

  const [lookToday, setLookToday] = useRecoilState(TodayState);

  const date = new Date();
  const router = useRouter();

  const onClickList = (today: IUseditem) => (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);

    const todays = JSON.parse(
      sessionStorage.getItem(String(localStorageDate(date))) || "[]"
    );

    const temp = todays.filter((el: IUseditem) => el._id === todays._id);

    if (temp.length === 1) {
      setLookToday((prev) => !prev);
      return;
    }
    const { __typename, ...newToday } = today;
    todays.push(newToday);

    if (todays.length > 2) {
      todays.shift();
    }

    sessionStorage.setItem(
      String(localStorageDate(date)),
      JSON.stringify(todays)
    );

    setLookToday((prev) => !prev);
  };

  return <HomePresenter data={data} onClickList={onClickList}></HomePresenter>;
}
