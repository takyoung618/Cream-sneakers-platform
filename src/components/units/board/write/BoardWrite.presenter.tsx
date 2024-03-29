import * as S from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { v4 as uuidv4 } from "uuid";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <S.AddressModal visible={true}>
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.BoardWriteWrapper>
        <S.Wrapper>
          <S.Title>{props.isEdit ? "게시글 수정" : "게시글 등록"}</S.Title>
          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>작성자</S.Label>
              <S.Writer
                id="writer"
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.onChangeInputs}
                defaultValue={props.data?.fetchBoard.writer}
                readOnly={!!props.data?.fetchBoard.writer}
              />
              <S.Error>{props.inputsError.writer}</S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <S.Password
                id="password"
                type="password"
                placeholder="비밀번호를 작성해주세요."
                onChange={props.onChangeInputs}
              />
              <S.Error>{props.inputsError.password}</S.Error>
            </S.InputWrapper>
          </S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>제목</S.Label>
            <S.Subject
              id="title"
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.inputsError.title}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <S.Contents
              id="contents"
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeInputs}
              defaultValue={props.data?.fetchBoard.contents}
            />
            <S.Error>{props.inputsError.contents}</S.Error>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>주소</S.Label>
            <S.ZipcodeWrapper>
              <S.Zipcode
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  props.data?.fetchBoard.boardAddress?.zipcode ||
                  ""
                }
              />
              <S.SearchButton onClick={props.onClickAddressSearch}>
                우편번호 검색이용
              </S.SearchButton>
            </S.ZipcodeWrapper>
            <S.Address
              readOnly
              value={
                props.address ||
                props.data?.fetchBoard.boardAddress?.address ||
                ""
              }
            />
            <S.Address
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail || ""
              }
            />
          </S.InputWrapper>
          <S.ImageWrapper>
            <S.Label>사진첨부</S.Label>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isEdit ? true : props.isActive}
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.SubmitButton>
          </S.ButtonWrapper>
        </S.Wrapper>
      </S.BoardWriteWrapper>
    </>
  );
}
