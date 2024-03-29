import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./detail.queries";
import { isBucketActiveState } from "../../../../commons/store";
import { message, Modal } from "antd";
import { IDetailContainerProps } from "./detail.types";
import { FETCH_USED_ITEMS_I_PICKED } from "../../myPage/Mypage.queries";
import { FETCH_USER_LOGGED_IN } from "../../join_login/login/Login.queries";

export default function DetailContainer(props: IDetailContainerProps) {
  const router = useRouter();

  const UserInfo = getUserInfo();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const { data: IPicked } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      page: 1,
      search: "",
    },
  });

  const [isActive, setIsActive] = useRecoilState(isBucketActiveState);

  const onClickBasket = (el: any) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    // 1. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);
    if (temp.length === 1) {
      message.error("이미 담으신 상품입니다!!!");
      return;
    }

    // 2. 장바구니에 담기
    setIsActive((prev) => !prev);
    baskets.push(el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    message.success("장바구니에 상품이 추가되었습니다.");
  };

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: router.query._id },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
          },
        ],
      });
      Modal.success({
        content: `${data?.fetchUseditem.name} 구매가 완료되었습니다.`,
      });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

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

  const onClickEdit = () => {
    router.push(`/brand/${router.query._id}/edit`);
  };

  // 상품 찜
  const onClickItemPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: router.query._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query._id },
        },
        {
          query: FETCH_USED_ITEMS_I_PICKED,
          variables: { search: "", page: 1 },
        },
      ],
    });
    message.success("관심 상품에 상품이 등록되었습니다.");
  };

  return (
    <DetailPresenter
      data={data}
      UserInfo={UserInfo}
      onClickBasket={onClickBasket}
      onClickBuy={onClickBuy}
      onClickDeleteUseditem={onClickDeleteUseditem}
      onClickEdit={onClickEdit}
      onClickItemPick={onClickItemPick}
    />
  );
}
