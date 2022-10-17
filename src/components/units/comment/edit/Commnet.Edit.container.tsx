import { useMutation } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/Commnet.List.queries";
import CommentEditPresenter from "./Commnet.Edit.presenter";
import { DELETE_USED_ITEM_QUESTION } from "./Commnet.Edit.queries";


export default function CommentEditContainer(props){
    const router = useRouter();

    const UserInfo = getUserInfo();

    const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
    >(DELETE_USED_ITEM_QUESTION);

    const onClickDeleteQuestionButton = async () => {
        await deleteUseditemQuestion({
            variables: {
                useditemQuestionId: props.el._id,
            },
            refetchQueries: [
                {
                    query: FETCH_USED_ITEM_QUESTIONS,
                    variables: {useditemId: router.query._id},
                }
            ]
        })

        message.success("댓글이 삭제되었습니다.");
    }



    return (
        <CommentEditPresenter
            el={props.el}
            data={props.data}
            UserInfo={UserInfo}
            onClickDeleteQuestionButton={onClickDeleteQuestionButton}
        />
    )
}