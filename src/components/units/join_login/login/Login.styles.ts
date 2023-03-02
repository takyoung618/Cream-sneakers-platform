import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 400px;
  margin: auto;
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
`;

export const LogoImage = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 40px;
`;

export const LogoTitle = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const EmailWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  justify-content: start;
`;

export const PasswordWrapper = styled.div`
  margin-top: 30px;
  width: 400px;
  justify-content: start;
`;

export const EmailTitle = styled.div`
  font-weight: 700;
  width: 65px;
`;

export const PasswordTitle = styled.div`
  font-weight: 700;
  width: 50px;
`;

export const EmailInput = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid white;
  border-bottom: 1px solid #c2c2c2;
  padding-top: 10;
  ::placeholder {
    color: #c2c2c2;
    font-weight: 400;
  }
  :focus {
    outline: none;
  }
`;

export const EmailErrorMessage = styled.div`
  color: red;
  width: fit-content;
  margin-top: 5px;
`;

export const PasswordErrorMessage = styled.div`
  color: red;
  width: 146px;
  margin-top: 5px;
`;

export const LoginBtn = styled.button`
  background-color: black;
  color: white;
  font-weight: 700;
  width: 400px;
  height: 50px;
  border-radius: 13px;
  cursor: pointer;
  border: 1px solid black;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-evenly;
  cursor: pointer;
  margin: auto;
`;

export const SignUp = styled.div`
  margin: 20px 0px 35px 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  margin-bottom: 12rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  font-weight: 700;
  width: 400px;
  height: 50px;
  border-radius: 13px;
  border: 1px solid #dddddd;
  cursor: pointer;
  margin-top: 10px;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px 100px 0 20px;
`;

export const Kakao = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  margin: 10px 90px 0 20px;
`;

export const LoginText = styled.div`
  display: inline-flex;
  margin-top: 13px;
`;
