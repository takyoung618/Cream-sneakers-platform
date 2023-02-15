import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UPLOAD_FILE } from "../../commons/uploadImage/UploadImage.queries";
import { checkValidationImage } from "../../commons/uploadImage/UploadImage.validation";
import MyPagePresenter from "./MyPage.presenter";
import { UPDATE_USER } from "./Mypage.queries";
import * as yup from "yup";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { FETCH_USER_LOGGED_IN } from "../join_login/login/Login.queries";

  const schema = yup.object({
    name: yup.string()
  })

export default function MyPageContainer(props: any) {
  useEffect(() => {
    if (props.data !== undefined) {
      // reset({
      //   name: props.data?.fetchUserLoggedIn?.name
      // })

      SetName(props.data.fetchUserLoggedIn.name)
      
      
      if (props.data?.fetchUserLoggedIn?.picture) {
        setFileUrl(props.data.fetchUserLoggedIn.picture)
      }
    }
  }, [props.data])

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateUser] = useMutation(UPDATE_USER)
  const {data} = useQuery(FETCH_USER_LOGGED_IN)

  const UserInfo = getUserInfo();

  const [name, SetName] = useState('');
  
  // 이미지 업로드
  const handleImageError = (event: any) => {
    event.target.src = `images/기본이미지.png`
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const [fileUrl, setFileUrl] = useState("");

  console.log(fileRef);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFileUrl = (fileUrl: string, index: number) => {
    setFileUrl(fileUrl);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    SetName(event.target.value)
  }

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

  // 이미지 삭제 
  const onClickImageDelete = () => {
    setFileUrl("")
    refetchQueries: [
      {
        query: FETCH_USER_LOGGED_IN
      }
    ]
  }

  // 유저 프로필 업데이트
  const { register, handleSubmit, formState, reset} = useForm({ resolver: yupResolver(schema), mode: "onChange"})

  const onClickUpdateButton = async (data: any) => {
    const result = await updateUser({
      variables: {
        updateUserInput: {
          name,
          picture: fileUrl
        }
      }
    })

    // console.log(data?.updateUser)
    console.log(UserInfo?.picture)
    message.success("프로필 수정이 완료되었습니다!")
  }

  

  
    
  return (
    <MyPagePresenter
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onChangeFileUrl={onChangeFileUrl}
      onClickImageDelete={onClickImageDelete}
      onClickUpdateButton={onClickUpdateButton}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeName={onChangeName}
      data={data}
      handleImageError={handleImageError}
    />
  )
}