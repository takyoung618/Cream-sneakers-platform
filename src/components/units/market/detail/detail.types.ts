import { IQuery } from "../../../../commons/types/generated/types";

export interface IDetailContainerProps {}

export interface IDetailPresenterProps {
  data: Pick<IQuery, "fetchUseditem">;
  onClickBuy: () => void;

  onClickDeleteUseditem: () => void;
  onClickEdit: () => void;
}
