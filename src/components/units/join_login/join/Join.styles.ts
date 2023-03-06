import styled from "@emotion/styled";

export const JoinWrapper = styled.div`
  width: 100vw;
`;

export const Wrapper = styled.div`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LogoWrapper = styled.div`
  margin-top: 2rem;
`;

export const LogoImage = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 40px;
  font-weight: 600;
`;

export const LogoTitle = styled.div`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 30px;
`;

export const PasswordWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const EmailTitle = styled.div`
  font-weight: 700;
  width: 75px;
`;

export const PasswordTitle = styled.div`
  font-weight: 700;
  display: inline-flex;
`;

export const SizeTitle = styled.div`
  font-weight: 700;
  width: 60px;
`;

export const EmailInput = styled.input`
  width: 400px;
  height: 50px;
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

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 2px;
  display: inline-flex;
`;

export const LoginBtn = styled.button`
  /* background-color: black;
  color: white;
  font-weight: 700;
  width: 400px;
  height: 50px;
  border-radius: 13px;
  cursor: pointer;
  margin-bottom: 15rem;
  border: 1px solid black; */
`;

export const SignUpWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-evenly;
`;

export const SignUp = styled.div``;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 50px;
  border: 1px solid gray;
`;

export const Icon = styled.div``;

export const ToLogin = styled.div``;

export const AgreeWrapper = styled.div`
  margin: auto;
`;

export const FirstCheckWrapper = styled.div`
  display: flex;
  width: 400px;
  margin: 2rem 0 0rem 0;
`;

export const SecondCheckWrapper = styled.div`
  display: flex;
  width: 400px;
`;

export const CheckBox = styled.input`
  width: 30px;
`;

export const Agree = styled.div`
  margin-left: 0.2rem;
`;
