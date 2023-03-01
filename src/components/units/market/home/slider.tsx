import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export const SlideWrapper = styled.div`
  .slick-dots {
    bottom: 10px;
  }
  .slick-dots li button:before {
    opacity: 0.25;
    color: white;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: white;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 60%;
  cursor: pointer;
`;

export default function HomeSliderPage() {
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
    <SlideWrapper>
      <Slider {...settings}>
        <div>
          <Img src="/images/carousel/a_8c8fe6e3c7b3429a809dee9bd4cb18d4.webp"></Img>
        </div>
        <div>
          <Img src="/images/carousel/a_0024f2a40f3e4274826cc8819e7e8441.webp"></Img>
        </div>
        <div>
          <Img src="/images/carousel/a_24779e723a574c4488c3288f8bd236b6.webp"></Img>
        </div>
      </Slider>
    </SlideWrapper>
  );
}
