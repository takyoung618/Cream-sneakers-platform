import * as S from "./home.styles"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroller";

export default function HomePresenter(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <S.Wrapper>
            <Slider {...settings}>
                <div>
                    <S.Img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"></S.Img>
                </div>
                <div>
                    <S.Img src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).webp"></S.Img>
                </div>
                <div>
                    <S.Img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"></S.Img>
                </div>
            </Slider>
            <S.Title>New Arrival</S.Title>
            <S.ListWrapper>
                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper>

                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper>
                
            </S.ListWrapper>
        </S.Wrapper>
    )
}