import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 80rem;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 10rem;
    border: 2px solid #E3E3E3;
    border-radius: 20px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: fit-content;
    margin: 3rem 0 3rem 3.5rem;
`

export const ProfileImage = styled.img`
    width: 8rem;
    height: 8rem;
    background-image: "https://kream.co.kr/_nuxt/img/blank_profile.4347742.png";
    border-radius: 100px;
`

export const UserWrapper = styled.div`
    margin: 1.5rem 0 0 3rem;
`

export const UserId = styled.div`
    font-size: 20px;
    font-weight: 600;
`

export const ImageWrapper = styled.div`
    margin: 0.5rem 0 0 0;
`

export const ImageEditBtn = styled.button`
    height: 40px;
    width: 100px;
    background-color: white;
    border: 1px solid #CFCFCF;
    border-radius: 10px;
    color: #787878;
    cursor: pointer;
`

export const ImageDeleteBtn = styled.button`
    height: 40px;
    width: 60px;
    background-color: white;
    border: 1px solid #CFCFCF;
    border-radius: 10px;
    margin-left: 5px;
    color: #787878;
    cursor: pointer;
`

export const HeaderWrapper = styled.div`
    width: 73rem;
    border-top: 2px solid #E3E3E3;
    padding-top: 3rem;
    margin: auto;
`

export const LoginHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`

export const LoginWrapper = styled.div`
    display: flex;
`

export const InfoHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 4rem 0 0 3.5rem;
`

export const EmailWrapper = styled.div`
    width: 25rem;
    margin: 2rem 0 0 3.5rem;
    border-bottom: 1px solid #E3E3E3;
`

export const EmailTitle = styled.div`
    color: #787878;
    font-weight: 500;
`

export const InfoWrapper = styled.div`
    display: flex;
    margin: 0.5rem 0 0.5rem 0;
`

export const Email = styled.input`
    padding-right: 12rem;
    border: none;
    :focus {outline: none}
`

// 관심 상품
export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  margin-bottom: 3rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 3rem;
  margin-right: 0.2rem;
  cursor: pointer;
`

export const Image = styled.img`
  width: 16rem;
  height: 16rem;
  background-color: #ECF3F2;;
  border-radius: 10px;
  margin-top: 2rem;
`

export const PriceWrapper = styled.div`
  display: flex;
`

export const Tag = styled.div`
  width: 16rem;
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
  width: 16rem;
  font-size: 16px;
  color: #555555;
`
