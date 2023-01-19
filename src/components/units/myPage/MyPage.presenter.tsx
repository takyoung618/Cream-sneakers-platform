import * as S from "./MyPage.styles";


export default function MyPagePresenter() {
    return (
        <S.Wrapper>
            <S.ProfileWrapper>
                <S.ProfileImage src="https://kream.co.kr/_nuxt/img/blank_profile.4347742.png"/>
                <S.UserWrapper>
                    <S.UserId>apfl9803</S.UserId>
                    <S.ImageWrapper>
                        <S.ImageEditBtn>이미지 변경</S.ImageEditBtn>
                        <S.ImageDeleteBtn>삭제</S.ImageDeleteBtn>
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
                        <S.Email/>
                        <S.ImageDeleteBtn>변경</S.ImageDeleteBtn>
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
                        <S.Email/>
                        <S.ImageDeleteBtn>변경</S.ImageDeleteBtn>
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