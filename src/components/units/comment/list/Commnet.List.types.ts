import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListContainerProps {
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}

export interface ICommentListPresenterProps {
  QuestionsData: Pick<IQuery, "fetchUseditemQuestions"> | undefined;
  FetchMoreQuestions: () => void;
  data: Pick<IQuery, "fetchUseditem"> | undefined;
}
