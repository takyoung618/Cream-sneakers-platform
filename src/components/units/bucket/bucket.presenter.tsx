import * as S from "./bucket.styles"

export default function BucketPresenter(props: any) {
    return (
        <S.Wrapper>
            <S.BucketTitle>
                장바구니
            </S.BucketTitle>
            <S.HeaderWrapper>
                <S.AllCheckBox
                    type="checkbox"
                />
                <S.OptionTitle>상품정보</S.OptionTitle>
                <S.PriceTitle>상품금액</S.PriceTitle>
            </S.HeaderWrapper>

            <S.PickListWrapper>
            {props.baskets.map((el: any) => (
                <S.ProductWrapper 
                key={el._id}
                >
                    <S.CheckBox
                        type="checkbox"
                    />
                    <S.Image
                        key={el._id}
                        src={
                            el.images?.[0] || el.images?.[1]
                            ? `http://storage.googleapis.com/${el.images?.[0]}`
                            : `images/기본이미지.png`
                        }
                        onError={props.handleImageError}
                        onClick={props.onClickDetail}
                    />
                    <S.ColumnWrapper
                    onClick={props.onClickDetail}
                    >
                        <S.FreeBtn>무료배송</S.FreeBtn>
                        <S.ProductTitle>{String(el.name).slice(0,30)}</S.ProductTitle>
                    </S.ColumnWrapper>
                    <S.RowWrapper>
                        <S.Line/>
                        <S.ProductPrice>{el.price}원</S.ProductPrice>
                    </S.RowWrapper>
                    
                </S.ProductWrapper>
            ))}
            </S.PickListWrapper>
            
            <S.ShoppingBtn
                onClick={props.onClickShop}
            >
                ← 쇼핑 계속하기
            </S.ShoppingBtn>
            <S.PriceWrapper>
                <S.TotalTitle>최종 결제 금액</S.TotalTitle>
                <S.TotalPrice>100000원</S.TotalPrice>
            </S.PriceWrapper>
            <S.PaymentBtn>결제하기</S.PaymentBtn>
        </S.Wrapper>
    )
}