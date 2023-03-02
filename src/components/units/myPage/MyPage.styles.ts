import styled from "@emotion/styled";
import Modal from "react-modal";

export const MyPageWrapper = styled.div`
  width: 100vw;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80rem;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 6rem;
  margin-bottom: 10rem;
  border: 2px solid #e3e3e3;
  border-radius: 20px;
  box-shadow: 10px 5px 10px #e3e3e3;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: 2rem 0 2rem 3.5rem;
`;

export const ImageContainer = styled.div``;

export const PhotoInput = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100px;
  cursor: pointer;
`;

export const UploadImageBtn = styled.div`
  position: relative;
  right: 26%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UploadFileHidden = styled.input`
  display: none;
`;

export const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 100px;
  cursor: pointer;
`;

export const UserWrapper = styled.div`
  margin: 1.5rem 0 0 3rem;
`;

export const UserId = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  margin: 0.5rem 0 0 0;
`;

export const ImageEditBtn = styled.button`
  height: 40px;
  width: 100px;
  background-color: white;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  color: #787878;
  cursor: pointer;
`;

export const ImageDeleteBtn = styled.button`
  height: 40px;
  width: 60px;
  background-color: white;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  margin-left: 5px;
  color: #787878;
  cursor: pointer;
`;

export const HeaderWrapper = styled.div`
  width: 73rem;
  border-top: 2px solid #e3e3e3;
  padding-top: 3rem;
  margin: auto;
`;

export const LoginHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const LoginWrapper = styled.div`
  display: flex;
`;

export const InfoHeader = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 4rem 0 0 3.5rem;
`;

export const EmptyWrapper = styled.div`
  margin: auto;
`;

export const EmptyCartIcon = styled.img`
  width: 300px;
  margin: 50px 0 50px 60px;
`;

export const EmptyTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const MoveToShopBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  margin: auto;
  background-color: black;
  color: white;
  font-size: 20px;
  margin-bottom: 100px;
  border: 1px solid black;
  cursor: pointer;
`;

export const EmailWrapper = styled.div`
  width: 25rem;
  margin: 2rem 0 0 3.5rem;
  border-bottom: 1px solid #e3e3e3;
`;

export const EmailTitle = styled.div`
  color: #787878;
  font-weight: 500;
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 0.5rem 0 0.5rem 0;
`;

export const Email = styled.input`
  padding-right: 12rem;
  border: none;
  :focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin: 0.5rem 0 0.5rem 3.5rem;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 11rem;
`;

// 관심 상품
export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
  margin-bottom: 3rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin-left: 3rem;
  margin-right: 0.2rem;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 16rem;
  height: 16rem;
  background-color: #c4c4c4;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
`;

export const PriceWrapper = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  width: 16rem;
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
  width: 16rem;
  font-size: 16px;
  color: #555555;
`;

// 구매/판매 내역
export const BuyWrapper = styled.div`
  display: flex;
  width: 92%;
  margin-left: 4%;
  border-bottom: 1px solid #e3e3e3;
`;

export const PointWrapper = styled.div`
  display: flex;
  width: 92%;
  height: 100px;
  margin-left: 4%;
  border-bottom: 1px solid #e3e3e3;
`;

export const PointCount = styled.div`
  color: green;
  font-size: 20px;
  margin: 3% 0 0 3%;
`;

export const PointDate = styled.div`
  font-size: 18px;
  margin: 3% 0 0 82%;
`;

export const BuyImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-color: gray;
  margin: 15px 0 15px 0px;
`;

export const BuyInfoWrapper = styled.div`
  margin-top: 4%;
  margin-left: 2%;
`;

export const BuyProductName = styled.div`
  font-size: 20px;
  height: fit-content;
`;

export const BuyPrice = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: gray;
  height: fit-content;
`;

export const BuyDate = styled.div`
  font-size: 18px;
  height: fit-content;
  margin: 5% 0 0 62%;
`;

export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalImageWrapper = styled.div`
  background-color: white;
  width: 464px;
  height: 280px;
  border: 2px solid #e3e3e3;
  border-radius: 15px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 300px;
`;

export const ImageTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin: 0px 0 0 60px;
`;

export const ModalCloseButton = styled.div`
  width: 16px;
  height: 16px;

  background-color: transparent;
  border: none;
  margin: 10px 0px 0px 432px;
  cursor: pointer;
`;
