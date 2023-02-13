import { ChangeEvent } from "react";
import { ISearchbarProps } from "./Searchbars.types";
import _ from "lodash";
import SearchbarPresenter from "./Searchbars.presenter";

export default function SearchbarContainer(props: ISearchbarProps) {
  const getDebounce = _.debounce((value: string) => {
    props.refetch({ search: value, page: 1 });
    props.refetchBoardsCount({ search: value });
    props.onChangeKeyword(value);
    console.log(props.refetch)
  }, 200);

  console.log(props.refetch)

  function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchbarPresenter onChangeSearchbar={onChangeSearchbar} />;
}
