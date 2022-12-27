import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../commons/types/generated/types";
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
    if (!useditemsData) return;

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
    router.push("/brand/create")
  }

  const onClickList = (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);
  }

  const onChangeKeyword = (value: string) => {
    setKeyWord(value)
  }

  // 커밋 올라가나 확인?

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
