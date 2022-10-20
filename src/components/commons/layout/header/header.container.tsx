import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { isBucketActiveState, logInStatusState } from "../../../../commons/store";
import HeaderPresenter from "./header.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING, LOGOUT_USER } from "./header.queries";
import Head from "next/head";

export default function HeaderContainer() {
    const router = useRouter();

    const UserInfo = getUserInfo();

    const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

    const [logoutUser] = useMutation(LOGOUT_USER);

    const [createPointTransactionOfLoading] = useMutation(
        CREATE_POINT_TRANSACTION_OF_LOADING
    );

    const [bucketIsActive, setBucketIsActive] = useRecoilState(isBucketActiveState)

    const [bucketList, setBucketList] = useState([])

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const [charged, setCharged] = useState(false);

    const [selected, setSelected] = useState("");

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

    useEffect(() => {
      const result = JSON.parse(localStorage.getItem("bucketList") || "[]")
      setBucketList(result)
  }, [bucketIsActive])


    useEffect(() => {
      setCharged(UserInfo);
    }, [charged]);
  

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

    const onChangeSelect = (event: any) => {
      setSelected(event.target.value);
      if (!event.target.value) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    const onClickCharge = () => {
      const IMP = window.IMP;

      IMP.init("imp49910675");

      IMP.request_pay(
        {
          pg: "nice",
          pay_method: "card",
          name: "금액 충전",
          amount: selected,
          buyer_email: UserInfo?.fetchUserLoggedIn.email,
          buyer_name: UserInfo?.fetchUserLoggedIn.name,
          buyer_tel: "010-1234-5678",
          buyer_addr: "서울특별시 구로구",
          buyer_postcode: "01181",
          m_redirect_url: `http://localhost:3000/`,
        },
        async (rsp: any) => {
          if (rsp.success) {
            await createPointTransactionOfLoading({
              variables: { impUid: rsp.imp_uid },
            });
            setModalIsOpen(false);
            setCharged(true);
            router.push(`/`);
            message.success("결제가 완료되었습니다.");
          } else {
            message.error("결제에 실패했습니다. 다시 시도해주세요.");
          }
        }
      );
    };

    return (
      <>
        <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
        </Head>
          <HeaderPresenter
          onClickHome={onClickHome}
          onClickLogin={onClickLogin}
          onClickJoin={onClickJoin}
          onClickLogOut={onClickLogOut}
          bucketList = { bucketList }
          modalIsOpen={modalIsOpen}
          isActive={isActive}
          setModalIsOpen={setModalIsOpen}
          onClickCharge={onClickCharge}
          selected={selected}
          onChangeSelect={onChangeSelect}
        />
      </>
        
    )
}