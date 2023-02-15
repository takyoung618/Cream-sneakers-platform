import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IUseditemQuestion,
} from "../../../../commons/types/generated/types";

export interface ICommentEditContainerProps {
  el: IUseditemQuestion;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface ICommentEditPresenterProps {
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  editContents: string;
  onClickEdit: () => void;
  onClickDeleteQuestionButton: (event: MouseEvent<HTMLElement>) => void;
  onChangeEditContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  el: IUseditemQuestion;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
  UserInfo: any
}
