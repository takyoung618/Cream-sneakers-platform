import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { TodayState } from "../../../../commons/store";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { localStorageDate } from "../../../commons/libraries/utils";
import MainPresenter from "./Main.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OF_THE_BEST } from "./Main.queries";

export default function ProductListContainer() {
  const router = useRouter();
  const date = new Date();
  const [keyword, setKeyWord] = useState("");

  const [lookToday, setLookToday] = useRecoilState(TodayState);

  const { data: useditemsBestData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS_OF_THE_BEST, {
    fetchPolicy: "network-only",
  });

  const { data: useditemsData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    fetchPolicy: "network-only",
  });

  const FetchMoreUseditems = () => {
    if (!useditemsData) return; // 데이터가 없으면 무한스크롤을 실행하지 않는다.

    fetchMore({
      variables: {
        page: Math.ceil(useditemsData?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickCreate = () => {
    router.push("/brand/create");
  };

  //
  const onClickList = (today: IUseditem) => (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);

    const todays = JSON.parse(
      sessionStorage.getItem(String(localStorageDate(date))) || "[]"
    );

    const temp = todays.filter((el: IUseditem) => el._id === today._id);

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

  const onChangeKeyword = (value: string) => {
    setKeyWord(value);
  };

  return (
    <MainPresenter
      useditemsBestData={useditemsBestData}
      useditemsData={useditemsData}
      FetchMoreUseditems={FetchMoreUseditems}
      onClickCreate={onClickCreate}
      onClickList={onClickList}
      refetch={fetch}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
    ></MainPresenter>
  );
}
