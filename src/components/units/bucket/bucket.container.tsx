import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import BucketPresenter from "./bucket.presenter";

export interface IBucketContainerProps {
  onClicDetial: (event: any) => void;
}

export default function BucketContainer(props: IBucketContainerProps) {
  const router = useRouter();
  const [baskets, setBaskets] = useState<IUseditem[]>([]);

  const handleImageError = (event: any) => {
    event.target.src = "/default.png";
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBaskets(result);
  }, []);

  const onClickDetail = (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);
  };

  const onClickShop = (event: any) => {
    router.push("main");
  };

  const onClickPay = (event: any) => {
    Modal.error({ content: "아직 개발 중인 기능입니다." });
  };

  return (
    <BucketPresenter
      baskets={baskets}
      handleImageError={handleImageError}
      onClickDetail={onClickDetail}
      onClickShop={onClickShop}
      onClickPay={onClickPay}
    />
  );
}
