import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { IMutation, IMutationCreatePointTransactionOfBuyingAndSellingArgs, IMutationDeleteUseditemArgs, IQuery, IQueryFetchUseditemArgs } from "../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING, DELETE_USED_ITEM, FETCH_USED_ITEM } from "./detail.queries";
import { isBucketActiveState } from "../../../commons/store";
import { message, Modal } from "antd";

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

    const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

    const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

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

    const onClickBuy = async () => {
        try {
            await createPointTransactionOfBuyingAndSelling({
              variables: { useritemId: router.query._id },
            });
            Modal.success({
              content: `${data?.fetchUseditem.name} 구매가 완료되었습니다.`,
            });
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    }

    const onClickDeleteUseditem = async () => {
        try {
          await deleteUseditem({
            variables: { useditemId: router.query._id },
          });
          message.success(`${data?.fetchUseditem.name} 삭제가 완료되었습니다.`);
          router.push("/main");
        } catch (error) {
          if (error instanceof Error) console.log(error.message);
        }
      };

    return (
        <DetailPresenter
        data={data}
        UserInfo={UserInfo}
        onClickBasket={onClickBasket}
        onClickBuy={onClickBuy}
        onClickDeleteUseditem={onClickDeleteUseditem}
        />
    )
}