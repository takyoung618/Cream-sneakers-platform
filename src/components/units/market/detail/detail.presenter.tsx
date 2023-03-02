import { OmitProps } from "antd/lib/transfer/ListBody";
import KaKaoMap from "../../../commons/kakaoMap-detail";
import CommentListContainer from "../../marketComment/list/Commnet.List.container";
import CommentWriteContainer from "../../marketComment/write/Comment.Write.container";
import * as S from "./detail.styles";
import { IDetailPresenterProps } from "./detail.types";
import DOMPurify from "dompurify";

export default function DetailPresenter(props: IDetailPresenterProps) {
  const isImageEmpty = props.data?.fetchUseditem.images.length === 0;

  return (
    <S.DetailPageWrapper>
      <S.Wrapper>
        <S.HeaderWrapper>
          <S.ImageWrapper>
            <S.Image>
              {isImageEmpty ? (
                <S.NoneImageIcon src="/images/기본이미지.png" />
              ) : (
                <S.ImageIcon
                  src={
                    props.data?.fetchUseditem.images?.[0] &&
                    `http://storage.googleapis.com/${props.data.fetchUseditem.images?.[0]}`
                  }
                />
              )}
            </S.Image>

            <S.WarnWrapper>
              <S.ColWrapper>
                <S.TextWrapper>
                  <S.Warn>주의</S.Warn>
                  <S.WarnText>판매 거래 주의사항</S.WarnText>
                </S.TextWrapper>
                <S.Text>반드시 보유한 상품만 판매하세요</S.Text>
              </S.ColWrapper>
              <S.Arrow src="/images/market/detail/arrow.png" />
            </S.WarnWrapper>
          </S.ImageWrapper>

          <S.WrapperColumn>
            <S.BrandWrapper>
              <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
              <S.Brand>{props.data?.fetchUseditem.remarks}</S.Brand>
            </S.BrandWrapper>
            <S.PriceWrapper>
              <S.PriceTitle>판매가</S.PriceTitle>
              <S.Price>{props.data?.fetchUseditem.price}</S.Price>
              <S.PriceWon>원</S.PriceWon>
            </S.PriceWrapper>

            {process.browser && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></S.Contents>
            )}
            <S.ButtonWrapper>
              <S.BuyButton onClick={props.onClickBuy}>
                즉시 구매하기
              </S.BuyButton>
              <S.ShoppingButton
                onClick={props.onClickBasket(props.data?.fetchUseditem)}
              >
                장바구니에 추가
              </S.ShoppingButton>
            </S.ButtonWrapper>
            <S.GgimBtnWrapper onClick={props.onClickItemPick}>
              <S.BookmarkIcon src="/images/market/detail/bookmark.png" />
              <S.GgimTitle>관심상품</S.GgimTitle>
              <S.Ggim>{props.data?.fetchUseditem.pickedCount}</S.Ggim>
            </S.GgimBtnWrapper>
          </S.WrapperColumn>
        </S.HeaderWrapper>

        <S.DetailTitleWrapper>
          <S.DetailTitle>Location</S.DetailTitle>
        </S.DetailTitleWrapper>

        <S.DetailWrapper>
          <S.AsTitle>배송/교환/반품/AS 관련 유의사항</S.AsTitle>
          <S.AsContents>
            상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음
            안내사항보다 우선 적용됩니다.
          </S.AsContents>
          <KaKaoMap data={props.data} />
          <S.ExplaneWrapper>
            <S.Explane>
              • 상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이
              달라집니다.
            </S.Explane>
            <S.Explane>
              • 상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은
              배송이 불가합니다.
            </S.Explane>
            <S.Explane>
              • 상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품
              택배비 고객부담으로 왕복택배비가 발생합니다.
            </S.Explane>
            <S.Explane>
              • 주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는
              점 양해 부탁드립니다.
            </S.Explane>
            <S.Explane>
              • 반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여
              주십시오.
            </S.Explane>
            <S.Explane>
              • A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련
              문의는 에이블리 고객센터를 통해 부탁드립니다.
            </S.Explane>
            <S.Explane>
              • 상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에
              관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실
              수 있습니다.
            </S.Explane>
          </S.ExplaneWrapper>
        </S.DetailWrapper>
        <S.FooterWrapper>
          <S.DetailTitle>Q & A</S.DetailTitle>
        </S.FooterWrapper>
        <S.CommentWriteWrapper>
          <CommentWriteContainer />
        </S.CommentWriteWrapper>
        <CommentListContainer data={props.data} />
      </S.Wrapper>
    </S.DetailPageWrapper>
  );
}
