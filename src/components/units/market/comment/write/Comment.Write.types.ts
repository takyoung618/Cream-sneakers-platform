import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface ICommentWriteContainerProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  el: IUseditemQuestion;
}

export interface ICommentWritePresenter {
  contents: string;
  contentsError: string;
  onChangeContents: (event: ChangeEvent) => void;
  onClickCreateComment: () => void;
  isEdit: boolean;
  el: IUseditemQuestion;
  onClickEditComment: () => void;
}
