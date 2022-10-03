import * as S from "./Main.styles"
import {BiSearch} from "react-icons/Bi"

export default function MainPresenter(){

    return(
        <S.Wrapper>
            <S.BestWrapper>
                <S.BestTitle>BEST</S.BestTitle>

                <S.ListWrapper>
                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper>

                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper> 
            </S.ListWrapper>
            </S.BestWrapper>
            <S.CreateWrapper>
                <S.CreateButton>상품 등록</S.CreateButton>
                <S.SearchWrapper>
                    <S.SearchInput> 
                    </S.SearchInput>
                    <BiSearch style={{ marginTop: "20px"}}/>
                </S.SearchWrapper>
            </S.CreateWrapper>

            <S.ListWrapper>
                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper>

                <S.ProductWrapper>
                    <S.Image>
                        <S.Heart src="/images/greyHeart.png"/>
                    </S.Image>
                    <S.PriceWrapper>
                        <S.Tag>대표태그</S.Tag>
                        <S.Price>27,500</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>조이조이</S.ProductName>
                    <S.ProductContents>[당일출고/주문폭주] 노티드 캔버스 패브릭 가방 4col...</S.ProductContents>
                </S.ProductWrapper>
            </S.ListWrapper>
        </S.Wrapper>
    )
}