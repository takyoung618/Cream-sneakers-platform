import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USEDITEMS } from "../main/Main.queries";
import HomePresenter from "./home.presenter";
import { IHomePageContainerProps } from "./home.types";

export default function HomeContainer(props: IHomePageContainerProps) {
  const { data } = useQuery(FETCH_USEDITEMS);

  const router = useRouter();

  const onClickList = (event: any) => {
    router.push(`/brand/${event.currentTarget.id}`);
  };

  return <HomePresenter data={data} onClickList={onClickList}></HomePresenter>;
}
