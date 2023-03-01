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
  height: 35rem;
  cursor: pointer;
`;

export default function HomeSliderPage() {
  const settings = {
    dots: true,
    arrows: true,
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
          <Img src="/images/carousel/carousel5.jpg"></Img>
        </div>
        <div>
          <Img src="/images/carousel/carousel4.jpg"></Img>
        </div>
        <div>
          <Img src="/images/carousel/carousel3.jpg"></Img>
        </div>
      </Slider>
    </SlideWrapper>
  );
}
