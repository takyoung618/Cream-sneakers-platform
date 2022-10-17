import { useRouter } from "next/router";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import CommentEditPresenter from "./Commnet.Edit.presenter";


export default function CommentEditContainer(props){
    const router = useRouter();

    const UserInfo = getUserInfo();



    return (
        <CommentEditPresenter
            el={props.el}
            data={props.data}
            UserInfo={UserInfo}
        />
    )
}