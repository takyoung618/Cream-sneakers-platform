import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import { IQuery, IQueryFetchUseditemArgs } from "../../../commons/types/generated/types";
import DetailPresenter from "./detail.presenter";
import { FETCH_USED_ITEM } from "./detail.queries";


export default function DetailContainer(){
    const router = useRouter();

    const UserInfo = getUserInfo();

    const { data } = useQuery<
        Pick<IQuery, "fetchUseditem">,
        IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query._id) },
    });


    return (
        <DetailPresenter
        data={data}
        UserInfo={UserInfo}
        />
    )
}