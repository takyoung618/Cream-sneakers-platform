import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const ScrollAnimation = keyframes`
  0% {
   bottom: -2.2rem;
  }
  100% {
   bottom: -4rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  scrollbar-width: none;
  .Navigation {
    a {
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    circle,
    #2E2C2B 0%,
    black 100%
  );
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  padding-bottom: 10rem;
`;

export const MainText = styled.div`
  font-size: 3.2rem;
  font-weight: 400;
  color: black;
`;

export const ShopBtn = styled.button`
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
  padding: 2rem 5rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  letter-spacing: 2px;
  box-shadow: inset 0 0 0 0 white;
  font-weight: 600;
  border: 1px dashed white;
  :hover {
    color: black;
    box-shadow: inset 312px 0 0 0 white;
    border: 1px solid white;
  }
`;

export const ScrollBox = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 6rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const ScrollText = styled.p`
  color: white;
`;

export const ScrollIcon = styled.img`
  width: 2.5rem;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${ScrollAnimation} 0.8s 1s infinite linear;
`;

export const Logo = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 70px;
  color: white;
  margin-bottom: 50px;
  animation: text-focus-in 4s infinite;
  @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`

export const ContainerB = styled.div`
  background-color: black;
`

export const TopContents = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background-color: white;
`

export const TopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: #F1F1F1;
`

export const TopImage = styled.img`
  height: 100%;
  width: 50%;
  background-image: src="images/landingPage/snikers.png";
`

export const BottomContents = styled.div`
  display: flex;
  height: 50%;
  width: 100%;
  background-color: black;
`


export const BottomRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: black;
`

export const BottomImage = styled.div`
  height: 100%;
  width: 50%;
  background-color: red;
`

export const TextBox = styled.div`
  margin: 30px 40px 0px 40px;
`

export const TextTitle = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 50px;
`

export const Text = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
`

export const TopButton = styled.button`
  width: 300px;
  height: 70px;
  margin: 30px 0px 0px 40px;
  background-color: #F1F1F1;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  border: solid 1.5px;
  cursor: pointer;
`

export const TextTitle2 = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 50px;
  color: white;
`

export const Text2 = styled.div`
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  color: white;
`

export const BottomButton = styled.button`
  width: 300px;
  height: 70px;
  margin: 30px 0px 0px 40px;
  background-color: black;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 20px;
  color: white;
  border: solid 1.5px white;
  cursor: pointer;
`

export const MainTitle = styled.div`
  width: 31.25rem;
  height: 12.5rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 50px;
  font-weight: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  margin: 3.125rem 62.5rem 0px 0px;
  animation: text-focus-in 2s forwards;
  @keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
  }

`



