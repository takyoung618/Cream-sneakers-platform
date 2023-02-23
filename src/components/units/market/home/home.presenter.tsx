import * as S from "./home.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroller";
import { IHomePagePresenterProps } from "./home.types";

export default function HomePresenter(props: IHomePagePresenterProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <S.SlideWrapper>
        <Slider {...settings}>
          <div>
            <S.Img src="/images/carousel/a_8c8fe6e3c7b3429a809dee9bd4cb18d4.webp"></S.Img>
          </div>
          <div>
            <S.Img src="/images/carousel/a_0024f2a40f3e4274826cc8819e7e8441.webp"></S.Img>
          </div>
          <div>
            <S.Img src="/images/carousel/a_24779e723a574c4488c3288f8bd236b6.webp"></S.Img>
          </div>
        </Slider>
      </S.SlideWrapper>

      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>just Uploaded</S.Title>
          <S.ProductTitle>발매 상품</S.ProductTitle>
        </S.TitleWrapper>
        <S.ProductListWrapper>
          {props.data?.fetchUseditems.slice(0, 8).map((el: any) => (
            <S.ProductWrapper
              key={el._id}
              id={el._id}
              onClick={props.onClickList}
            >
              <S.Image
                src={
                  el.images?.[0] || el.images?.[1]
                    ? `http://storage.googleapis.com/${el.images?.[0]}`
                    : `images/기본이미지.png`
                }
              />
              <S.ProductName>{String(el.name).slice(0, 25)}</S.ProductName>
              <S.Price>{el.price}원</S.Price>
              <S.PriceTag>즉시 구매가</S.PriceTag>
            </S.ProductWrapper>
          ))}
        </S.ProductListWrapper>
      </S.Wrapper>
    </>
  );
}
