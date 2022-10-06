import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { logInStatusState } from "../../../../commons/store";
import HeaderPresenter from "./header.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING, LOGOUT_USER } from "./header.queries";

export default function HeaderContainer() {
    const router = useRouter();

    const UserInfo = getUserInfo();

    const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

    const [logoutUser] = useMutation(LOGOUT_USER);

    const [createPointTransactionOfLoading] = useMutation(
        CREATE_POINT_TRANSACTION_OF_LOADING
    );

    const deleteCookie = (name) => {
        document.cookie =
          name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=C.kr;path=/;";
      };
    
      useEffect(() => {
        if (localStorage.getItem("accessToken")) {
          setLogInStatus(true);
        } else if (!localStorage.getItem("accessToken")) {
          setLogInStatus(false);
        }
    }, [logInStatus]);

    const onClickLogOut = () => {
        try {
          logoutUser();
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userInfo");
          setLogInStatus(false);
    
          deleteCookie("refreshToken");
          router.push("/");
          message.success("로그아웃 되었습니다.");
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    const onClickHome = () => {
        router.push("/")
    }

    const onClickLogin = () => {
        router.push("/login")
    }

    const onClickJoin = () => {
        router.push("/join")
    }


    return (
        <HeaderPresenter
        onClickHome={onClickHome}
        onClickLogin={onClickLogin}
        onClickJoin={onClickJoin}
        onClickLogOut={onClickLogOut}
        />
    )
}