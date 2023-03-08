import styled from "@emotion/styled";

const CustomButton = styled.button`
  color: white;
  font-weight: 700;
  width: 400px;
  height: 50px;
  border-radius: 13px;
  cursor: pointer;
  margin-bottom: 15rem;
  border: none;
`;

export default function ButtonJoin(props: any) {
  return (
    <CustomButton
      style={{
        backgroundColor: props.isActive ? "black" : "#e3e3e3;",
      }}
    >
      {props.title}
    </CustomButton>
  );
}
