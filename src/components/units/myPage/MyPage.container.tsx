import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { UPLOAD_FILE } from "../../commons/uploadImage/UploadImage.queries";
import { checkValidationImage } from "../../commons/uploadImage/UploadImage.validation";
import MyPagePresenter from "./MyPage.presenter";
import {
  FETCH_BOARDS_OF_MINE,
  FETCH_USED_ITEMS_I_PICKED,
  RESET_USER_PASSWORD,
  UPDATE_USER,
} from "./Mypage.queries";
import * as yup from "yup";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { FETCH_USER_LOGGED_IN } from "../join_login/login/Login.queries";
import { useRouter } from "next/router";

const schema = yup.object({
  name: yup.string(),
});

export default function MyPageContainer(props: any) {
  useEffect(() => {
    if (props.data !== undefined) {
      setName(props.data.fetchUserLoggedIn.name);

      if (props.data?.fetchUserLoggedIn?.picture) {
        setFileUrl(props.data.fetchUserLoggedIn.picture);
      }
    }
  }, [props.data]);

  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateUser] = useMutation(UPDATE_USER);
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);
  const { data: IPicked } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      page: 1,
      search: "",
    },
  });

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const [modalImageIsOpen, setModalImageIsOpen] = useState(false);

  const UserInfo = getUserInfo();

  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const router = useRouter();

  const onClickImageModal = () => {
    setModalImageIsOpen(true);
  };

  // 이미지 업로드
  const handleImageError = (event: any) => {
    event.target.src = `images/기본이미지.png`;
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
    setName(event.target.value);
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

  // 이미지 삭제
  const onClickImageDelete = () => {
    setFileUrl("");
  };

  // 유저 프로필 업데이트
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickUpdateButton = async (data: any) => {
    const result = await updateUser({
      variables: {
        updateUserInput: {
          name,
          picture: fileUrl,
        },
      },
      refetchQueries: [
        {
          query: FETCH_USER_LOGGED_IN,
        },
      ],
    });
    console.log(UserInfo?.picture);
    setModalImageIsOpen(false);
    message.success("프로필 수정이 완료되었습니다!");
  };

  // 비밀번호 변경
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // 비번길이 8-16자, 영어숫자 포함, 기존 비밀번호와 같은지 확인
  const onClickResetPassword = async () => {
    let isCheck = true;
    let regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

    if (!regPass.test(password)) {
      isCheck = false;
      message.error("비밀번호는 영문, 숫자 조합 8-16자리로 입력해주세요.");
    }

    if (isCheck) {
      const result = await resetUserPassword({
        variables: {
          password,
        },
      });
      message.success("비밀번호 수정이 완료되었습니다.");
    }
  };

  const onClickMoveToDetail = (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);
  };

  const onClickMoveToShop = (event: any) => {
    router.push(`/main`);
  };

  return (
    <MyPagePresenter
      fileRef={fileRef}
      fileUrl={fileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
      onChangeFileUrl={onChangeFileUrl}
      onClickImageDelete={onClickImageDelete}
      onClickUpdateButton={onClickUpdateButton}
      onClickResetPassword={onClickResetPassword}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      data={data}
      IPicked={IPicked}
      handleImageError={handleImageError}
      onClickImageModal={onClickImageModal}
      modalImageIsOpen={modalImageIsOpen}
      setModalImageIsOpen={setModalImageIsOpen}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToShop={onClickMoveToShop}
    />
  );
}
