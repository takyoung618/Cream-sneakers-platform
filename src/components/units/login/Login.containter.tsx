import { useApolloClient, useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { accessTokenState, logInStatusState } from "../../../commons/store";
import LoginPresenter from "./Login.presenter";
import * as yup from "yup";
import { IMutation, IMutationLoginUserArgs } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { message, Modal } from "antd";

export const schema = yup.object({
  email: yup
    .string()
    .required("ID를 입력해주세요.")
    .email("이메일 형식으로 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),
});


export default function LoginContainer() {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

    const router = useRouter();
    const client = useApolloClient();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onClickLogin = async (data) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken || "");
      localStorage.setItem("accessToken", accessToken);

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      message.success(`${userInfo.name}님, 안녕하세요!`);
      router.push("/");
      setLogInStatus(true);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      router.push("/join");
    }
  };


    return (
        <LoginPresenter
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickLogin={onClickLogin}
        />
    )
}