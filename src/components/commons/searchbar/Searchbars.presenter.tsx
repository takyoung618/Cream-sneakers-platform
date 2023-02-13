import { Searchbar, SearchbarInput } from "./Searchbars.styles";
import { ISearchbars01UIProps } from "./Searchbars.types";

export default function SearchbarPresenter(props: ISearchbars01UIProps) {
  return (
    <Searchbar>
      <SearchbarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchbar}
      />
    </Searchbar>
  );
}
