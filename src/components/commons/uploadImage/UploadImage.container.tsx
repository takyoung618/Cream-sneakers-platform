import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import { UPDATE_USER } from "../../units/myPage/Mypage.queries";
import UploadImagePresenter from "./UploadImage.presenter";
import { UPLOAD_FILE } from "./UploadImage.queries";
import { IUploadImageContainerProps } from "./UploadImage.types";
import { checkValidationImage } from "./UploadImage.validation";

export default function UploadImageContainer(
  props: IUploadImageContainerProps
) {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  // DOM 취득 목표
  const fileRef = useRef<HTMLInputElement>(null);

  console.log(fileRef);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  // 이미지 업로드 함수
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <UploadImagePresenter
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    ></UploadImagePresenter>
  );
}
