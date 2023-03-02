import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0 0px 0;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

export const ProductTitle = styled.div`
  width: fit-content;
  font-size: 20px;
  color: gray;
`;

export const HomeWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  margin-bottom: 12rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 18rem;
  height: 18rem;
  background-color: #c4c4c4;
  border-radius: 10px;
  margin-top: 1rem;
`;

export const Heart = styled.img``;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  width: 18rem;
  font-weight: 700;
  font-size: 20px;
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const PriceTag = styled.div`
  font-size: 10px;
  color: gray;
`;

export const ProductName = styled.div`
  width: 18rem;
  font-size: 16px;
  color: #555555;
`;

export const ProductContents = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #555555;
`;
