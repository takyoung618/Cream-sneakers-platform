import styled from "@emotion/styled";
import { FiUpload } from "react-icons/fi";
import { IUploadImagePresenterProps } from "./UploadImage.types";

const PhotoUpload = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 30px;
`;

const PhotoInput = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  border: none;
  margin-right: 30px;
  cursor: pointer;
`;

const UploadFileHidden = styled.input`
  display: none;
`;

export default function UploadImagePresenter(
  props: IUploadImagePresenterProps
) {
  return (
    <>
      {props.fileUrl ? (
        <PhotoUpload
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        ></PhotoUpload>
      ) : (
        <PhotoInput onClick={props.onClickUpload} type="button">
          <FiUpload
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </PhotoInput>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      ></UploadFileHidden>
    </>
  );
}
