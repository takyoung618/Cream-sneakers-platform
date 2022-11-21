import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ICreateUserInput, IMutation, IMutationCreateUserArgs } from "../../../commons/types/generated/types";
import JoinPresenter from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { message, Modal } from "antd";

export const schema = yup.object({
    email: yup
      .string()
      .email("이메일 형식으로 입력해주세요.")
      .required("이메일을 입력해주세요."),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
        "영문, 숫자 조합 8~16자리로 입력해주세요."
      ),
    passwordCheck: yup
      .string()
      .required("비밀번호를 한번 더 입력해주세요.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
    name: yup.string().required("이름을 입력해주세요."),
  });

export default function JoinContainer () {
    const router = useRouter();

    const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
    >(CREATE_USER);

    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });


  const onClickJoin = async (data: ICreateUserInput) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      message.success("회원가입이 완료되었습니다.");
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  
  const onClickCancel = () => {
    router.push("/")
  }


    return(
        <JoinPresenter
            onClickCancel={onClickCancel}
            onClickJoin={onClickJoin}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
        />
    )
}