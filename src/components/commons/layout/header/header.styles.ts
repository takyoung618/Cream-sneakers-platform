import styled from "@emotion/styled";
import Modal from "react-modal";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 31px;
    justify-content: space-between;
    align-items: center;
    margin-right: 1500px;
`

export const LogoImage = styled.div`
    margin-left: 90px;
    width: 181px;
    height: 49px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; 
    font-size: 40px;
`

export const HeaderWrapper = styled.div`
  /* display: flex;
  align-items: center;
  margin-right: 60px;
  margin-bottom: 20px; */
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
`

export const Login = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-right: 66px;
`

export const Signup = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-right: 56px;
`

export const Basket = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-right: 10px;
`

export const BasketCount = styled.div`
  background-color: red;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-right: 2rem;
  margin: 0 2rem 0.1rem 0;
`
export const Count = styled.div`
    color: white;
    font-weight: 400;
    font-size: 12px;
    margin: 3px 0px 0px 6px;
`

export const Point = styled.div`
    font-weight: 400;
    font-size: 14px;
`

export const ChargeButton = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin-left: 16px;
`

export const LogOut = styled.div`
    font-weight: 400;
    font-size: 14px;
    margin: 0px 45px 0px 54px;
`


// 포인트 충전 모달
export const ModalStyle = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 464px;
  height: 316px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: #ffffff;
  margin-top: 400px;
  margin-left: 800px;
`;

export const ModalCloseButton = styled.button`
  width: 16px;
  height: 16px;

  background-color: transparent;
  border: none;
  margin: 20px 0px 20px 400px;
  cursor: pointer;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 464px;
  height: 29px;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const ModalSelect = styled.select`
  width: 384px;
  height: 50px;
  border: none;
  border-bottom: 2px solid #000000;
  margin-bottom: 30px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #828282;
  }
`;

export const ModalButton = styled.button`
  width: 384px;
  height: 51px;
  background-color: ${(props) => (props.isActive ? "black" : "#bdbdbd")};
  border: none;
  color: white;
  border-radius: 10px;
  padding: 14px 16px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

