import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { logInStatusState } from "../../../commons/store";

export const withAuth = (Component) => (props) => {
    const [isLogout] = useRecoilState(logInStatusState);

    const router = useRouter();
    useEffect(() => {
        if (!isLogout) {
            Modal.error({ content: "로그인 후 이용 가능합니다!!" });
            router.push("/");
        }
    }, []);
    return <Component {...props} />;
};