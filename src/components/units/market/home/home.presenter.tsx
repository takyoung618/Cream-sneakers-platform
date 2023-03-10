import * as S from "./home.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IHomePagePresenterProps } from "./home.types";
import HomeSliderPage from "./slider";

export default function HomePresenter(props: IHomePagePresenterProps) {
  return (
    <S.HomeWrapper>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>New In</S.Title>
          <S.ProductTitle>신규 등록 상품</S.ProductTitle>
        </S.TitleWrapper>
        <S.ProductListWrapper>
          {props.data?.fetchUseditems.slice(0, 8).map((el: any) => (
            <S.ProductWrapper
              key={el._id}
              id={el._id}
              onClick={props.onClickList(el)}
            >
              <S.Image
                src={
                  el.images?.[0] || el.images?.[1]
                    ? `http://storage.googleapis.com/${el.images?.[0]}`
                    : `images/기본이미지.png`
                }
              />
              <S.ProductName>{String(el.name).slice(0, 24)}</S.ProductName>
              <S.Price>{el.price}원</S.Price>
              <S.RowWrapper>
                <S.PriceTag>즉시 구매가</S.PriceTag>
                <S.GgimWrapper>
                  <S.BookmarkIcon src="/images/listBookmark.png" />
                  <S.Ggim>{el.pickedCount}</S.Ggim>
                </S.GgimWrapper>
              </S.RowWrapper>
            </S.ProductWrapper>
          ))}
        </S.ProductListWrapper>
      </S.Wrapper>
    </S.HomeWrapper>
  );
}
