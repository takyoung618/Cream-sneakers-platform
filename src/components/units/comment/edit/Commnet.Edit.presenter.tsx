import { localStorageDate } from "../../../commons/libraries/utils"
import * as S from "./Commnet.Edit.styles"

export default function CommentEditPresenter(props){

    return (
        <div key={props.el._id}>
            <S.Wrapper>
                <S.UserWrapper>
                <S.User>{props.el.user.name}</S.User>
                <S.Qusetion>{props.el.contents}</S.Qusetion>
                </S.UserWrapper>
                
                <S.DateWrapper>
                <S.Date>{localStorageDate(props.el.createdAt)}</S.Date>
                <S.IconWrapper>
                        <S.EditIcon src="/images/CommentEdit.png" />
                        <S.DeleteIcon src="/images/CommentDelete.png"/>
                </S.IconWrapper>
                </S.DateWrapper>
            </S.Wrapper>
        </div>
    )
}