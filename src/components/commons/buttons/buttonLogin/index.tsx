import styled from "@emotion/styled";

const CustomButton = styled.button`
  /* background-color: black; */
  color: white;
  font-weight: 700;
  width: 400px;
  height: 50px;
  border-radius: 13px;
  cursor: pointer;
  border: 1px solid black;
`;

export default function ButtonLogin(props: any) {
  return (
    <CustomButton
      style={{
        backgroundColor: props.isActive ? "black" : "#e3e3e3;",
        borderColor: props.isActive ? "black" : "#e3e3e3;",
      }}
    >
      {props.title}
    </CustomButton>
  );
}
