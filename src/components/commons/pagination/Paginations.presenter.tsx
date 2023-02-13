import { Page } from "./Paginations.styles";
import { IPaginations01UIProps } from "./Paginations.types";

export default function PaginationsPresenter(props: IPaginations01UIProps) {
  return (
    <div>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            
            // index에 StartPage를 더해준다.
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
