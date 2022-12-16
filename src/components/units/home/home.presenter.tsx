import * as S from "./home.styles"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroller";
import { IHomePagePresenterProps } from "./home.types";

export default function HomePresenter(props: IHomePagePresenterProps){
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
                    <S.Img src="https://kream-phinf.pstatic.net/MjAyMjEyMTVfNzYg/MDAxNjcxMDkyMTA0ODQ3.cwNhir1L0b89EoIBIGSQAkGHESXuBDKVxu4uwXGBxiQg.f2-BK56BSHBD9FTx__bU-HLpB_zf4H75FRgPzNzhZI0g.JPEG/a_eafbf93890f14019b166bb494d090512.jpg?type=m_2560"></S.Img>
                </div>
                <div>
                    <S.Img src="https://kream-phinf.pstatic.net/MjAyMjEyMTJfMjI5/MDAxNjcwODIwOTE0MzIy.rTtS2Rs9JJOnPKF1tNaMErY4DpFE6ktOyATwbqMJKyog.3CGAG8iY97dgpPdT5WZeI1fZAbvXprLY8xvRSsIQkrQg.JPEG/a_bcda0224a3a8441486071624947bce73.jpg?type=m_2560"></S.Img>
                </div>
                <div>
                    <S.Img src="https://kream-phinf.pstatic.net/MjAyMjExMzBfMTcy/MDAxNjY5Nzc2NjUwMjE1.lqwCkD1RiAci3dwMa1jZU_FietiberaL09O8xVq1kswg.b9Tf_wjeeEkLZxsay6LnMngJ4s9hS_bdUeuxtskxYQIg.JPEG/a_785a59d8b7ee4721ad9eabade6702206.jpg?type=m_2560"></S.Img>
                </div>
                <div>
                    <S.Img src="https://kream-phinf.pstatic.net/MjAyMjEyMTJfMjY1/MDAxNjcwODIyMDIxODAx.RZJSbjUIovov624Sce5K27IJdr3c0cn4STtFI_ImxoUg.ebR7osAQFCjUwfcaYByc0XCJI9D9NND-GLUzgE3TlaMg.JPEG/a_f17b30e5dac64a789de2ee037df4be0e.jpg?type=m_2560"></S.Img>
                </div>
            </Slider>
            <S.Title>New Arrival</S.Title>

            <S.ListWrapper>
                <S.ProductListWrapper>
                {props.data?.fetchUseditems.slice(0,8).map((el : any) => (   
                    // key는 react가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕는다.
                    <S.ProductWrapper key={el._id} id={el._id}
                    onClick={props.onClickList}
                    >
                        <S.Image
                            src={
                                el.images?.[0] || el.images?.[1]
                                  ? `http://storage.googleapis.com/${el.images?.[0]}`
                                  : `images/프로필 이미지.png`
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