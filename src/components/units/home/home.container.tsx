import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_USEDITEMS} from "../main/Main.queries";
import HomePresenter from "./home.presenter";

export default function HomeContainer(){
    const { data } = useQuery(FETCH_USEDITEMS)

    return (
        <HomePresenter
            data={data}
        ></HomePresenter>
    )
}