import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    height: 870px;
`

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #555555;
    width: 1737.5px;
    height: 249px;
    margin-left: 91px;
    
`

export const Login = styled.div`
    font-weight: 400;
    font-size: 40px;
`

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 197px 0px 0px 490px;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleId = styled.div`
    font-weight: 400;
    font-size: 24px;
    margin: 0px 40px 45px 0px;
`

export const TitlePassword = styled.div`
    font-weight: 400;
    font-size: 24px;
    margin: 0px 40px 0px 15px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputId = styled.input`
    width: 611px;
    height: 56px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    margin: -23px 0px 24px 0px;
    ::placeholder {
        color: #A9A9A9;
        padding-left: 18px;
    }
`

export const InputPassword = styled.input`
    width: 611px;
    height: 56px;
    background-color: #E9E9E9;
    border: 1px solid #E9E9E9;
    ::placeholder {
        color: #A9A9A9;
        padding-left: 18px;
    }
`

export const LoginButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    width: 186px;
    height: 136px;
    margin: -24px 0px 0px 31px;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
`