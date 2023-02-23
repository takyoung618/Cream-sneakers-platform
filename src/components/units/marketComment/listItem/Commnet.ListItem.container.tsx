import { useMutation } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/Commnet.List.queries";
import CommentEditPresenter from "./Commnet.ListItem.presenter";
import { DELETE_USED_ITEM_QUESTION } from "./Commnet.ListItem.queries";
import { ICommentEditContainerProps } from "./Commnet.ListItem.types";

export default function CommentEditContainer(
  props: ICommentEditContainerProps
) {
  const router = useRouter();

  const UserInfo = getUserInfo();

  const [isEdit, setIsEdit] = useState(false);
  const [editContents, setEditContents] = useState("");

  const onClickEdit = () => {
    setIsEdit(true);
  };

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
          variables: { useditemId: router.query._id },
        },
      ],
    });

    message.error("댓글이 삭제되었습니다.");
  };

  const onChangeEditContents = (event: any) => {
    setEditContents(event.target.value);
  };

  return (
    <CommentEditPresenter
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      editContents={editContents}
      onClickEdit={onClickEdit}
      el={props.el}
      onChangeEditContents={onChangeEditContents}
      data={props.data}
      UserInfo={UserInfo}
      onClickDeleteQuestionButton={onClickDeleteQuestionButton}
    />
  );
}
