import { OmitProps } from "antd/lib/transfer/ListBody";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
import * as S from "./MyPage.styles";
import { v4 as uuidv4 } from "uuid";


export default function MyPagePresenter(props: any) {
    const UserInfo = getUserInfo();

    return (
       

            
            <S.Wrapper>
                <S.ProfileWrapper>
                    {props.fileUrl ? (
                        <S.ProfileImage 
                        src={`https://storage.googleapis.com/${props.fileUrl}`}
                        />
                        ) : (
                        <S.PhotoInput
                            src="images/기본이미지.png"
                        >
                        </S.PhotoInput>
                        )}
                        <S.UploadFileHidden
                            type="file"
                            ref={props.fileRef}
                            onChange={props.onChangeFile}
                        >
                        </S.UploadFileHidden>
                    
                    <S.UserWrapper>
                        <S.UserId>{UserInfo?.fetchUserLoggedIn.email}</S.UserId>
                        <S.ImageWrapper>
                            <S.ImageEditBtn
                                onClick={props.onClickUpload}
                            >
                            이미지 변경</S.ImageEditBtn>
                            <S.ImageDeleteBtn
                            >
                            삭제</S.ImageDeleteBtn>
                        </S.ImageWrapper>
                    </S.UserWrapper>
                </S.ProfileWrapper>
                <S.HeaderWrapper>
                    <S.LoginHeader>
                        로그인 정보
                    </S.LoginHeader>
                </S.HeaderWrapper>
                <S.LoginWrapper>
                    <S.EmailWrapper>
                        <S.EmailTitle>이메일 주소</S.EmailTitle>
                        <S.InfoWrapper>
                            <S.Email
                                onChange={props.onChangeEmail}
                            />
                            <S.ImageDeleteBtn
                                onClick={props.onClickSave}
                            >변경</S.ImageDeleteBtn>
                        </S.InfoWrapper>
                    </S.EmailWrapper>
                    <S.EmailWrapper>
                        <S.EmailTitle>비밀번호</S.EmailTitle>
                        <S.InfoWrapper>
                            <S.Email/>
                            <S.ImageDeleteBtn>변경</S.ImageDeleteBtn>
                        </S.InfoWrapper>
                    </S.EmailWrapper>
                </S.LoginWrapper>
                <S.InfoHeader>
                    개인 정보
                </S.InfoHeader>
                <S.LoginWrapper>
                    <S.EmailWrapper>
                        <S.EmailTitle>이름</S.EmailTitle>
                        <S.InfoWrapper>
                            <S.Email
                                onChange={props.onChangeName}
                            />
                            <S.ImageDeleteBtn
                                onClick={props.onClickSave}
                            >변경</S.ImageDeleteBtn>
                        </S.InfoWrapper>
                    </S.EmailWrapper>
                    <S.EmailWrapper>
                        <S.EmailTitle>신발 사이즈</S.EmailTitle>
                        <S.InfoWrapper>
                            <S.Email/>
                            <S.ImageDeleteBtn>변경</S.ImageDeleteBtn>
                        </S.InfoWrapper>
                    </S.EmailWrapper>
                </S.LoginWrapper>
                <S.InfoHeader>
                    관심 상품
                </S.InfoHeader>
                <S.ProductListWrapper>
                    {/* {props.data?.fetchUseditems.slice(0,8).map((el : any) => (    */}
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                    {/* ))}     */}
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                        <S.ProductWrapper>
                            <S.Image
                            />
                            <S.PriceWrapper>
                                <S.Tag>태그</S.Tag>
                            </S.PriceWrapper>
                            <S.ProductName>이름</S.ProductName>
                            <S.Price>111원</S.Price>
                            <S.PriceTag>즉시 구매가</S.PriceTag>
                        </S.ProductWrapper>
                    </S.ProductListWrapper>
            </S.Wrapper>
       
    )
}