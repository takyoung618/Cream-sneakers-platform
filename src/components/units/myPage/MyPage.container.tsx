import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UPLOAD_FILE } from "../../commons/uploadImage/UploadImage.queries";
import { checkValidationImage } from "../../commons/uploadImage/UploadImage.validation";
import MyPagePresenter from "./MyPage.presenter";
import { UPDATE_USER } from "./Mypage.queries";
import * as yup from "yup";

// const schema = yup.object({
//   picture: yup.string().required("이미지를 등록해주세요")
// })


export default function MyPageContainer(props: any) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // const [updateUser] = useMutation(UPDATE_USER)

  // 이미지 업로드
  const fileRef = useRef<HTMLInputElement>(null);

  const [fileUrl, setFileUrl] = useState("");

  console.log(fileRef);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    setFileUrl(fileUrl);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    console.log(file);

    try {
      const result = await uploadFile({ variables: { file } });
      onChangeFileUrl(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // const {
  //   handleSubmit
  // } = useForm({ resolver: yupResolver(schema)})

  // 유저 프로필 업로드
  // const onClickUpdateButton = async (data: any) => {
    
  //   const result = await updateUser({
  //     variables: {
  //       updateUserInput: {
  //         picture: [props.fileUrl]
  //       }
  //     }
  //   })
  //   console.log(data?.updateUser)
  //   message.success("프로필이 등록되었습니다")
  // }
  
    
  return (
    <MyPagePresenter
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onChangeFileUrl={onChangeFileUrl}
      // onClickUpdateButton={onClickUpdateButton}
      // handleSubmit={handleSubmit}
    />
  )
}