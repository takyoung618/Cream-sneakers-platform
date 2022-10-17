import * as S from "./home.styles"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroller";

export default function HomePresenter(props){
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
                <S.ProductListWrapper>
                {props.data?.fetchUseditems.slice(0,8).map((el : any) => (   
                    <S.ProductWrapper key={el._id} id={el._id}
                    onClick={props.onClickList}
                    >
                        <S.Image
                            src={
                                el.images?.[0] || el.images?.[1] || el.images?.[2]
                                  ? `http://storage.googleapis.com/${el.images?.[0]}`
                                  : `/today.jpg`
                            }
                        />
                        <S.PriceWrapper>
                            <S.Tag>#{el.tags}</S.Tag>
                            <S.Price>{el.price}</S.Price>
                        </S.PriceWrapper>
                        <S.ProductName>{el.name}</S.ProductName>
                        <S.ProductContents>{el.contents}</S.ProductContents>
                    </S.ProductWrapper>
                ))}    
                </S.ProductListWrapper>
            </S.ListWrapper>
        </S.Wrapper>
    )
}