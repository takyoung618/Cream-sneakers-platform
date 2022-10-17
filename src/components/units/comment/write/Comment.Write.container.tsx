import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateUseditemQuestionArgs } from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/Commnet.List.queries";
import CommentWritePresenter from "./Comment.Write.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./Comment.Write.queries";
import { ICommentWriteContainerProps } from "./Comment.Write.types";


export default function CommentWriteContainer(props: ICommentWriteContainerProps){
    const router = useRouter();

    const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  const [isActive, setIsActive] = useState(false);

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
    event.target.value
        ? setContentsError("")
        : setContentsError("댓글을 입력해주세요.");
    event.target.value ? setIsActive(true) : setIsActive(false);
  }

  const onClickCreateComment = async () => {
    contents ? setContentsError("") : setContentsError("댓글을 입력하세요.");

    if(contents) {
        try {
            await createUseditemQuestion({
                variables: {
                    createUseditemQuestionInput: {
                        contents,
                    },
                    useditemId: String(router.query._id),
                },
                refetchQueries: [
                    {
                        query: FETCH_USED_ITEM_QUESTIONS,
                        variables: { useditemId: router.query._id}
                    }
                ]
            })
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });  
        }
        setContents("");
    }
  }

    return (
        <CommentWritePresenter
            contentsError={contentsError}
            onChangeContents={onChangeContents}
            onClickCreateComment={onClickCreateComment}
        />
    )
}