import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 3px solid #f1f1f1;
  width: 71rem;
  margin: 0px 9rem 20px 9rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const User = styled.div`
  width: 100px;
  height: 27px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-weight: 400;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Qusetion = styled.div`
  width: 700px;
  font-weight: 400;
  font-size: 15px;
  margin-left: 40px;
`;

export const DateWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  margin-right: 60px;
`;

export const Date = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

export const EditIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 48px;
  justify-content: space-between;
  margin-left: 70px;
`;

export const CommentEditWrapper = styled.div`
  margin-left: 9rem;
  width: 70rem;
  display: flex;
`;
