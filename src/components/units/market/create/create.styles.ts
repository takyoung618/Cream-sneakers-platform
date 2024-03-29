import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const CreateWrapper = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 76rem;
  height: 116px;
  border-bottom: 1px solid #999999;
  margin: auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 175px;
  width: 76rem;
  border-bottom: 3px solid #999999;
  margin-left: 91px;
  margin: auto;
`;

export const Header = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin: 0px 0px 31px 37px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TitleName = styled.div`
  width: 150px;
  font-weight: 500;
  font-size: 24px;
  margin: 20px 140px 0px 43px;
`;

export const TitleName4 = styled.div`
  width: 180.2px;
  font-weight: 500;
  font-size: 24px;
  margin: 20px 130px 0px 43px;
`;

export const input = styled.input`
  width: 1900px;
  height: 56px;
  margin-top: 15px;
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
  ::placeholder {
    color: #a9a9a9;
  }
  padding-left: 18px;
  :focus {
    outline: none;
  }
`;

export const ReactWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 76rem;
  margin: auto;
  margin-bottom: 57px;
`;

export const React = styled(ReactQuill)`
  height: 431px;
  margin: 28px 0px 0px 105px;
  width: 1000px;
`;

export const Title = styled.div`
  width: 100px;
  font-weight: 500;
  font-size: 24px;
  margin: 57px 20px 0px 40px;
`;

export const TitlePrice = styled.div``;

export const TitleTag = styled.div``;

export const MapWrapper = styled.div`
  display: flex;
  width: 76rem;
  margin: 0px 0px 37px 12rem;
  border-bottom: 1px solid #999999;
  margin: auto;
`;

export const LocationTitleWrapper = styled.div`
  width: 76rem;
  margin: auto;
`;

export const TitleLocation = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin: 41px 0px 38px 2.5rem;
`;

export const Map = styled.div`
  width: 384px;
  height: 252px;
  background-color: #e9e9e9;
  margin-bottom: 37px;
  margin-left: 30px;
`;

export const SerchWrapper = styled.div`
  display: flex;
  margin: 65px 0px 0px 26px;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  margin-right: 16px;
  padding-left: 14px;
`;

export const ZipcodeSerch = styled.button`
  width: 124px;
  height: 51px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
export const LocationInput = styled.input`
  width: 700px;
  height: 56px;
  background-color: #e9e9e9;
  border: 1px solid #e9e9e9;
  margin: 27px 0px 0px 26px;
  padding-left: 18px;
  :focus {
    outline: none;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitlePicture = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin: 50px 0px 38px 40px;
`;

export const ImageWrapper = styled.div`
  width: 71rem;
  margin: auto;
  display: flex;
  margin-bottom: 76px;
`;

export const Image = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
`;

export const ButtonWrapper = styled.div`
  width: 76rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 263px;
  border-top: 3px solid #555555;
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 77px;
  border: 1px solid black;
  margin-right: 16px;
  cursor: pointer;
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 77px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const InputError = styled.div`
  color: red;
  font-size: 14px;
  width: fit-content;
  margin: 10px 0px 0px 260px;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearch = styled(DaumPostcodeEmbed)``;
