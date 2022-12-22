import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80rem;
    height: 116px;
    border-bottom: 1px solid #999999;
    margin: auto;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    height: 175px;
    width: 80rem;
    border-bottom: 3px solid #999999;
    margin-left: 91px;
    margin: auto;
`

export const Header = styled.div`
    font-weight: 700;
    font-size: 40px;
    margin: 0px 0px 31px 37px;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    
`

export const TitleName = styled.div`
    width: 100px;
    font-weight: 500;
    font-size: 24px;
    margin: 20px 176px 0px 43px;
`

export const TitleName4 = styled.div`
    width: 140px;
    font-weight: 500;
    font-size: 24px;
    margin: 20px 150px 0px 43px;
`

export const input = styled.input`
    width: 1419px;
    height: 56px;
    margin-top: 15px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    ::placeholder {
        color: #A9A9A9;
        padding-left: 18px;
    }
`

export const ReactWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    width: 76rem;
    margin: auto;
    margin-bottom: 57px;
`

export const React = styled(ReactQuill)`
    height: 431px;
    margin: 28px 0px 0px 105px;
    width: 1000px;
`

export const Title = styled.div`
    width: 100px;
    font-weight: 500;
    font-size: 24px;
    margin: 57px 50px 0px 10px;
`

export const TitlePrice = styled.div`
    
`

export const TitleTag = styled.div`
    
`

export const MapWrapper = styled.div`
    display: flex;
    width: 80rem;
    margin: 0px 0px 37px 12rem;
    border-bottom: 1px solid #999999;
    margin: auto;
`

export const LocationTitleWrapper = styled.div`
    width: 80rem;
    margin: auto;
`

export const TitleLocation = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin: 41px 0px 38px 2.5rem;
`

export const Map = styled.div`
    width: 384px;
    height: 252px;
    background-color: #E9E9E9;
    margin-bottom: 37px;
    margin-left: 30px;
`

export const SerchWrapper = styled.div`
    display: flex;
    margin: 17px 0px 0px 26px;
`

export const Zipcode = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #BDBDBD;
    color: #BDBDBD;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    margin-right: 16px;
`

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
`
export const LocationInput = styled.input`
    width: 850px;
    height: 56px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    margin: 27px 0px 0px 26px;
`

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitlePicture = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin: 50px 0px 38px 40px;
`

export const ImageWrapper = styled.div`
    width: 75rem;
    margin: auto;
    display: flex;
    margin-bottom: 76px;
`

export const Image = styled.div`
    width: 180px;
    height: 180px;
    background-color: #bdbdbd;
    margin-right: 24px;
`

export const ButtonWrapper = styled.div`
    width: 80rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 263px;
    border-top: 3px solid #555555;
`

export const CancelButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 77px;
    border: 1px solid black;
    margin-right: 16px;
    cursor: pointer;
`

export const CreateButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 77px;
    background-color: black;
    color: white;
    cursor: pointer;
`

export const InputError = styled.div`
    color: red;
    font-size: 12px;
    width: 300px;
    margin: 0px 0px 0px 280px;
`

export const AddressModal = styled(Modal)``;

export const AddressSearch = styled(DaumPostcodeEmbed)``;