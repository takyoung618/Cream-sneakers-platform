import { ChangeEvent, RefObject } from "react";

export interface IUploadImageContainerProps {
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  index: number;
  fileUrl: string;
}

export interface IUploadImagePresenterProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: String;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
}
