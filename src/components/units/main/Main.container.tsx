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

  const [bestItems, setBestItems] = useState(["", "", "", ""]);

  const { best } = useQuery<
  Pick<IQuery, "fetchUseditemsOfTheBest">,
  IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS_OF_THE_BEST, {
    fetchPolicy: "network-only",
  });

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    fetchPolicy: "network-only",
  });

  const FetchMoreUseditems = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
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





  return (
    <MainPresenter
      bestItems={bestItems}
      data={data}
      FetchMoreUseditems={FetchMoreUseditems}
    ></MainPresenter>
  );
}
