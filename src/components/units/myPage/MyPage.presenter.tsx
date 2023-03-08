import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import * as S from "./MyPage.styles";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineClose, AiFillCamera } from "react-icons/ai";

export default function MyPagePresenter(props: any) {
  const UserInfo = getUserInfo();
  const isEmpty = props.IPicked?.fetchUseditemsIPicked.length === 0;

  return (
    <form onSubmit={props.handleSubmit(props.onClickUpdateButton)}>
      <S.MyPageWrapper>
        <S.Wrapper>
          <S.ProfileWrapper>
            <S.PhotoInput
              src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.picture}`}
              onError={props.handleImageError}
            ></S.PhotoInput>

            <S.UploadFileHidden
              type="file"
              ref={props.fileRef}
              onChange={props.onChangeFile}
            ></S.UploadFileHidden>

            <S.UserWrapper>
              <S.UserId onChange={props.onChangeName}>
                {UserInfo?.fetchUserLoggedIn.name}
              </S.UserId>
              <S.ImageWrapper>
                <S.ImageEditBtn
                  type="button"
                  onClick={() => props.setModalImageIsOpen(true)}
                >
                  이미지 변경
                </S.ImageEditBtn>
                <S.ImageDeleteBtn onClick={props.onClickImageDelete}>
                  삭제
                </S.ImageDeleteBtn>
              </S.ImageWrapper>
            </S.UserWrapper>
          </S.ProfileWrapper>
          <S.HeaderWrapper>
            <S.LoginHeader>로그인 정보</S.LoginHeader>
          </S.HeaderWrapper>
          <S.LoginWrapper>
            <S.ColumnWrapper>
              <S.EmailWrapper>
                <S.EmailTitle>이름</S.EmailTitle>
                <S.InfoWrapper>
                  <S.Email
                    defaultValue={props.data?.fetchUserLoggedIn?.name}
                    {...props.register("name")}
                    onChange={props.onChangeName}
                  />
                  <S.ImageDeleteBtn type="submit">변경</S.ImageDeleteBtn>
                </S.InfoWrapper>
              </S.EmailWrapper>
              <S.ErrorMessage>
                {props.formState.errors.name?.message}
              </S.ErrorMessage>
            </S.ColumnWrapper>

            <S.ColumnWrapper>
              <S.EmailWrapper>
                <S.EmailTitle>비밀번호</S.EmailTitle>
                <S.InfoWrapper>
                  <S.Email
                    onChange={props.onChangePassword}
                    placeholder="⦁⦁⦁⦁⦁⦁⦁⦁"
                  />
                  <S.ImageDeleteBtn
                    onClick={props.onClickResetPassword}
                    type="button"
                  >
                    변경
                  </S.ImageDeleteBtn>
                </S.InfoWrapper>
              </S.EmailWrapper>
            </S.ColumnWrapper>
          </S.LoginWrapper>
          <S.InfoHeader>내 관심상품</S.InfoHeader>
          {isEmpty ? (
            <S.EmptyWrapper>
              <S.EmptyCartIcon src="images/myPage/wishlist.png" />
              <S.EmptyTitle>관심 상품에 담긴 상품이 없습니다.</S.EmptyTitle>
              <S.MoveToShopBtn type="button" onClick={props.onClickMoveToShop}>
                쇼핑하려 가기
              </S.MoveToShopBtn>
            </S.EmptyWrapper>
          ) : (
            <S.ProductListWrapper>
              {props.IPicked?.fetchUseditemsIPicked.map((el: any) => (
                <S.ProductWrapper
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickMoveToDetail}
                >
                  <S.Image
                    key={el._id}
                    src={
                      el.images?.[0] || el.images?.[1]
                        ? `http://storage.googleapis.com/${el.images?.[0]}`
                        : `images/기본이미지.png`
                    }
                  />
                  <S.ProductName>{el.name}</S.ProductName>
                  <S.Price>{el.price}원</S.Price>
                  <S.PriceTag>즉시 구매가</S.PriceTag>
                </S.ProductWrapper>
              ))}
            </S.ProductListWrapper>
          )}
        </S.Wrapper>
      </S.MyPageWrapper>

      <S.ModalStyle isOpen={props.modalImageIsOpen}>
        <S.ModalImageWrapper>
          <S.ModalCloseButton onClick={() => props.setModalImageIsOpen(false)}>
            <AiOutlineClose style={{ width: "16px", height: "16px" }} />
          </S.ModalCloseButton>
          <S.ImageTitle>
            사진을 선택후 이미지 변경 버튼을 눌러주세요!!
          </S.ImageTitle>
          <S.ProfileWrapper>
            {props.fileUrl ? (
              <>
                <S.ProfileImage
                  src={`https://storage.googleapis.com/${props.fileUrl}`}
                  onClick={props.onClickUpload}
                />
                <S.UploadImageBtn onClick={props.onClickUpload}>
                  <AiFillCamera style={{ width: "26px", height: "26px" }} />
                </S.UploadImageBtn>
              </>
            ) : (
              <>
                <S.PhotoInput
                  src={`https://storage.googleapis.com/${props.data?.fetchUserLoggedIn?.picture}`}
                  onClick={props.onClickUpload}
                  onError={props.handleImageError}
                ></S.PhotoInput>
                <S.UploadImageBtn onClick={props.onClickUpload}>
                  <AiFillCamera style={{ width: "26px", height: "26px" }} />
                </S.UploadImageBtn>
              </>
            )}
            <S.UploadFileHidden
              type="file"
              ref={props.fileRef}
              onChange={props.onChangeFile}
            ></S.UploadFileHidden>

            <S.UserWrapper>
              <S.ImageWrapper>
                <S.ImageEditBtn
                  onClick={props.onClickUpdateButton}
                  type="button"
                >
                  이미지 변경
                </S.ImageEditBtn>
              </S.ImageWrapper>
            </S.UserWrapper>
          </S.ProfileWrapper>
        </S.ModalImageWrapper>
      </S.ModalStyle>
    </form>
  );
}
