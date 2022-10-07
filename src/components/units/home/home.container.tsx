import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEMS} from "../main/Main.queries";
import HomePresenter from "./home.presenter";

export default function HomeContainer(){
    const { data } = useQuery(FETCH_USEDITEMS)

    const router = useRouter();

    const onClickList = (event) => {
        router.push(`/brand/${event.currentTarget.id}`);
    }

    return (
        <HomePresenter
            data={data}
            onClickList={onClickList}
        ></HomePresenter>
    )
}