import styled from "@emotion/styled";

export const Wrapper = styled.div`
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
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 92px 0px 98px 898px;
`

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 90px;
`

export const ProductListWrapper = styled.div`
  width: 1737.5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 116px 50px 0px;
`

export const Image = styled.img`
  width: 348px;
  height: 466px;
  background-color: #C4C4C4;
`

export const Heart = styled.img`
`

export const PriceWrapper = styled.div`
  display: flex;
  margin: 18px 0px 0px 17px;
`

export const Tag = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #F65656;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 14px;
`

export const ProductName = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin: 14px 0px 0px 17px;
  color: #555555;
`

export const ProductContents = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin: 14px 0px 0px 17px;
  color: #555555;
`




