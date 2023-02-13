import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import MainPresenter from "./Main.presenter";
import { FETCH_USEDITEMS, FETCH_USEDITEMS_OF_THE_BEST } from "./Main.queries";

export default function ProductListContainer() {
  const router = useRouter();
  const date = new Date();
  const [keyword, setKeyWord] = useState("");

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
      // prev: 기존의 data
      // {fetchMoreResult} : 추가로 요청해서 받아온 내용

        // 새로 조회한 값이 없으면 기존 것으로 그냥 업데이트한다.
        if (!fetchMoreResult.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }

        return {
          // 기존의 것과 추가로 받은 것을 합쳐서 return 
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickCreate = () => {
    router.push("/brand/create")
  }

  const onClickList = (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);
  }

  const onChangeKeyword = (value: string) => {
    setKeyWord(value)
  }

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
