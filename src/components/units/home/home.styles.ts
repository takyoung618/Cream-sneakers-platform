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
`

export const Img = styled.img `
    width: 100%;
    height: 60%;
    cursor: pointer;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0 10px 0;
`

export const Title = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 30px;
`

export const ProductTitle = styled.div`
  width: fit-content;
  font-size: 20px;
  color: gray;
`

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
`

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  margin-bottom: 12rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-right: 15px;
`

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  background-color: #C4C4C4;
  border-radius: 20px;
`

export const Heart = styled.img`
`

export const PriceWrapper = styled.div`
  display: flex;
`

export const Tag = styled.div`
  font-weight: 700;
  font-size: 20px;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 18px;
`

export const PriceTag = styled.div`
  font-size: 10px;
  color: gray;
`

export const ProductName = styled.div`
  font-size: 16px;
  color: #555555;
`

export const ProductContents = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #555555;
`




