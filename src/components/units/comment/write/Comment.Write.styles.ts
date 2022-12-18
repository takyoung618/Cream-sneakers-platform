import styled from "@emotion/styled"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    margin-top: 60px;
`

export const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70rem;
    justify-content: end;
`

export const CommentBox = styled.input`
    width: 70rem;
    height: 231px;
    background-color: #F1F1F1;
    border: 1px solid #F1F1F1;;
    display: flex;
    padding: 0px 0px 115px 40px;
    ::placeholder {
        color: #A9A9A9;
    }
`

export const CommentCreateButton = styled.div`
    width: 170px;
    height: 60px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    margin: 17px 0px 0px 0;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 59.5rem;
`

