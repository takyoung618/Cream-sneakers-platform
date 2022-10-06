import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    height: 175px;
    width: 1737.5px;
    border-bottom: 3px solid #555555;
    margin-left: 91px;
`

export const Header = styled.div`
    font-weight: 700;
    font-size: 40px;
    margin: 0px 0px 31px 37px;
`

export const TitleWrapper = styled.div`
    display: flex;
    width: 1737.5px;
    margin-left: 91px;
    border-bottom: 1px solid #999999;
`

export const TitleName = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin: 57px 176px 49px 43px;
`

export const input = styled.input`
    width: 1419px;
    height: 56px;
    margin-top: 34px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    ::placeholder {
        color: #A9A9A9;
        padding-left: 18px;
    }
`

export const React = styled(ReactQuill)`
    width: 1419px;
    height: 431px;
    margin: 28px 0px 75px 0px;
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin: 57px 148px 49px 43px;
`

export const TitlePrice = styled.div`
    
`

export const TitleTag = styled.div`
    
`

export const MapWrapper = styled.div`
    display: flex;
    width: 1737.5px;
    margin: 0px 0px 37px 98px;
    border-bottom: 1px solid #999999;
`

export const TitleLocation = styled.div`
    font-weight: 500;
    font-size: 24px;
    margin: 41px 0px 38px 134px;
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

export const Zipcode = styled.div`
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

export const ZipcodeSerch = styled.div`
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
    width: 1241px;
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
    margin: 0px 0px 38px 134px;
`

export const ImageWrapper = styled.div`
    display: flex;
    margin-left: 134px;
    margin-bottom: 76px;
`

export const Image = styled.div`
    width: 180px;
    height: 180px;
    background-color: #bdbdbd;
    margin-right: 24px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1737.5px;
    height: 263px;
    border-top: 3px solid #555555;
    margin-left: 91px;
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
`
