import { localStorageDate } from "../../../commons/libraries/utils";
import CommentWriteContainer from "../write/Comment.Write.container";
import * as S from "./Commnet.ListItem.styles";
import { ICommentEditPresenterProps } from "./Commnet.ListItem.types";

export default function CommentEditPresenter(
  props: ICommentEditPresenterProps
) {
  return (
    <>
      {/* {!props.isEdit && ( */}
      <div key={props.el._id}>
        <S.Wrapper>
          <S.UserWrapper>
            <S.User>{props.el.user.name}</S.User>
            <S.Qusetion>{props.el.contents}</S.Qusetion>
          </S.UserWrapper>

          <S.DateWrapper>
            <S.Date>{localStorageDate(props.el.createdAt)}</S.Date>
            <S.IconWrapper>
              <S.EditIcon
                onClick={props.onClickEdit}
                src="/images/CommentEdit.png"
              />
              <S.DeleteIcon
                onClick={props.onClickDeleteQuestionButton}
                src="/images/CommentDelete.png"
              />
            </S.IconWrapper>
          </S.DateWrapper>
        </S.Wrapper>

        {props.isEdit && (
          <S.CommentEditWrapper>
            <CommentWriteContainer
              isEdit={true}
              setIsEdit={props.setIsEdit}
              el={props.el}
            ></CommentWriteContainer>
          </S.CommentEditWrapper>
        )}
      </div>
      {/* )} */}
    </>
  );
}
