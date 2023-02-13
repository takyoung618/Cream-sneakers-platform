import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemQuestionsArgs } from "../../../../../commons/types/generated/types";
import CommentListPresenter from "./Commnet.List.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./Commnet.List.queries";
import { ICommentListContainerProps } from "./Commnet.List.types";

export default function CommentListContainer(props: ICommentListContainerProps){
    const router = useRouter();

    const { data: QuestionsData, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query._id),
    },
  });

  const FetchMoreQuestions = () => {
    if (!QuestionsData) return;

    fetchMore({
      variables: {
        page: Math.ceil(QuestionsData.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
    
    return (
        <CommentListPresenter
            QuestionsData={QuestionsData}
            FetchMoreQuestions={FetchMoreQuestions}
            data={props.data}
        />
    )
}