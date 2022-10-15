import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { IQuery, IQueryFetchUseditemArgs } from "../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { FETCH_USED_ITEM } from "./detail.queries";
import { isBucketActiveState } from "../../../commons/store";
import { Modal } from "antd";

export default function DetailContainer(){
    const router = useRouter();

    const UserInfo = getUserInfo();

    const { data } = useQuery<
        Pick<IQuery, "fetchUseditem">,
        IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM, {
        variables: { 
            useditemId: String(router.query._id)
        },
    });

    const [isActive, setIsActive] = useRecoilState(isBucketActiveState)

    //장바구니

    const onClickBasket = (basket) => () => {
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        const temp = baskets.filter((el) => el?._id === basket?._id);
        if (temp.length === 1) {
          Modal.error({ content: "이미 담으신 상품입니다." });
          return;
        }
        const { ...newBasket } = basket;
        baskets.push(newBasket);
        localStorage.setItem("baskets", JSON.stringify(baskets));
      };


    return (
        <DetailPresenter
        data={data}
        UserInfo={UserInfo}
        onClickBasket={onClickBasket}
        />
    )
}