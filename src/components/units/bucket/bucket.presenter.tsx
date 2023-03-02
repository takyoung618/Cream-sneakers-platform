import * as S from "./bucket.styles";

export default function BucketPresenter(props: any) {
  const EmptyBucket = props.baskets.length === 0;

  return (
    <S.BucketWrapper>
      <S.Wrapper>
        {EmptyBucket ? (
          <S.BucketEmptyWrapper>
            <S.BucketIcon src="images/bucket/bucket.png" />
            <S.BucketEmptyTitle>
              장바구니에 담긴 상품이 없습니다.
            </S.BucketEmptyTitle>
            <S.ShoppingBucketBtn onClick={props.onClickShop}>
              계속 쇼핑하기
            </S.ShoppingBucketBtn>
          </S.BucketEmptyWrapper>
        ) : (
          <>
            <S.BucketTitle>장바구니</S.BucketTitle>
            <S.HeaderWrapper>
              <S.AllCheckBox type="checkbox" />
              <S.OptionTitle>상품정보</S.OptionTitle>
              <S.PriceTitle>상품금액</S.PriceTitle>
            </S.HeaderWrapper>
            <S.PickListWrapper>
              {props.baskets.map((el: any) => (
                <S.ProductWrapper
                  key={el._id}
                  id={el._id}
                  onClick={props.onClickDetail}
                >
                  <S.CheckBox type="checkbox" />
                  <S.Image
                    key={el._id}
                    src={
                      el.images?.[0] || el.images?.[1]
                        ? `http://storage.googleapis.com/${el.images?.[0]}`
                        : `images/기본이미지.png`
                    }
                    onError={props.handleImageError}
                  />
                  <S.ColumnWrapper>
                    <S.FreeBtn>무료배송</S.FreeBtn>
                    <S.ProductTitle>
                      {String(el.name).slice(0, 30)}
                    </S.ProductTitle>
                  </S.ColumnWrapper>
                  <S.RowWrapper>
                    <S.Line />
                    <S.ProductPrice>{el.price}원</S.ProductPrice>
                  </S.RowWrapper>
                </S.ProductWrapper>
              ))}
            </S.PickListWrapper>
            <S.ShoppingBtn onClick={props.onClickShop}>
              ← 쇼핑 계속하기
            </S.ShoppingBtn>
            <S.PriceWrapper>
              <S.TotalTitle>최종 결제 금액</S.TotalTitle>
              <S.TotalPrice>100000원</S.TotalPrice>
            </S.PriceWrapper>
            <S.PaymentBtn onClick={props.onClickPay}>결제하기</S.PaymentBtn>
          </>
        )}
      </S.Wrapper>
    </S.BucketWrapper>
  );
}
