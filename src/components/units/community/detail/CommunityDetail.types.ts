import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  onClickDelete: () => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
