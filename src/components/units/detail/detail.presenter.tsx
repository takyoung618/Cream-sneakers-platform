import { OmitProps } from "antd/lib/transfer/ListBody"
import CommentListContainer from "../comment/list/Commnet.List.container"
import CommentWriteContainer from "../comment/write/Comment.Write.container"
import * as S from "./detail.styles"

export default function DetailPresenter(){

    return(
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.Image/>
                <S.WrapperColumn>
                    <S.TitleWrapper>
                        <S.Title>AVANDRESS</S.Title>
                        <S.ProductName>[SET] HERO TRACK WIDE SET-UP PURPLE</S.ProductName>
                    </S.TitleWrapper>
                    <S.PriceWrapper>
                        <S.PriceTitle>판매가</S.PriceTitle>
                        <S.Price>153,900</S.Price>
                        <S.PriceWon>원</S.PriceWon>
                        <S.GgimWrapper>
                            <S.GgimTitle>My</S.GgimTitle>
                            <S.Heart src="/image/Vector.png"/>
                            <S.Product>Product</S.Product>
                        </S.GgimWrapper>    
                    </S.PriceWrapper>
                    <S.Contents>
                        폴리에스테르 100% 원사로 스퀘어미터 450 밀도있게 편직하여 중량감과 두께를 트레이닝복에 
                        최적화시켰으며 덤블텐타가공으로 축율 및 뒤틀림을 최소화 하였습니다. 수분을 빠르게 흡수하고 
                        건조되도록 하였고 내마모성이 좋습니다. 기계세탁이 가능하며 세탁 후 빠르게 건조되어 관리가 용이합니다.
                        편직 가공에서 유연제 처리로 부드러운 터치감으로 편안합니다.
                    </S.Contents>
                    <S.TagWrapper>
                        <S.Tag>
                            #트랙자켓 #아우터 #자켓
                        </S.Tag>
                    </S.TagWrapper>
                    <S.ButtonWrapper>
                        <S.BuyButton>BUY NOW</S.BuyButton>
                        <S.ShoppingButton>SHOPPING BAG</S.ShoppingButton>
                    </S.ButtonWrapper>
                </S.WrapperColumn>
            </S.HeaderWrapper>
                <S.DetailTitleWrapper>
                    <S.DetailTitle>DETAIL</S.DetailTitle>
                </S.DetailTitleWrapper>
                <S.DetailWrapper>
                    <S.AsTitle>배송/교환/반품/AS 관련 유의사항</S.AsTitle>
                    <S.AsContents>상품상세설명에 배송/교환/반품/취소 관련 안내가 기재된 경우 다음 안내사항보다 우선 적용됩니다.</S.AsContents>
                    <S.Map/>
                    <S.ExplaneWrapper>
                    <S.Explane>
                        • 상품별로 상품 특성 및 배송지에 따라 배송유형 및 소요기간이 달라집니다.
                    </S.Explane>
                    <S.Explane>
                    •  상품의 배송비는 공급업체의 정책에 따라 다르오며 공휴일 및 휴일은 배송이 불가합니다.
                    </S.Explane>
                    <S.Explane>
                    •  상품하자 이외 사이즈, 색상교환 등 단순 변심에 의한 교환/반품 택배비 고객부담으로 왕복택배비가 발생합니다. (전자상거래 등에서의 소비자보호에 관한 법률 제18조(청약 철회 등) 9항에 의거 소비자의 사정에 의한 청약 철회 시 택배비는 소비자 부담입니다.)
                    </S.Explane>
                    <S.Explane>
                    • 주문완료 후 재고 부족 등으로 인해 주문 취소 처리가 될 수도 있는 점 양해 부탁드립니다.
                    </S.Explane>
                    <S.Explane>
                    • 반품/교환은 미사용 제품에 한해 배송완료 후 7일 이내에 접수하여 주십시오.
                    </S.Explane>
                    <S.Explane>
                    • 제품을 사용 또는 훼손한 경우, 사은품 누락, 상품 TAG 보증서, 상품 부자재가 제거 혹은 분실된 경우, 밀봉포장을 개봉했거나 내부 포장재를 훼손 또는 분실한 경우(단, 제품확인을 위한 개봉 제외)  반품/교환이 불가합니다.
                    </S.Explane>
                    <S.Explane>
                    • A/S 기준이나 가능여부는 브랜드와 상품에 따라 다르므로 관련 문의는 에이블리 고객센터를 통해 부탁드립니다.
                    </S.Explane>
                    <S.Explane>
                    • 상품불량에 의한 반품,교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁해결기준(공정거래위원회 고시)에 따라 받으실 수 있습니다.
                    </S.Explane>  
                    </S.ExplaneWrapper>
                </S.DetailWrapper>
                <S.FooterWrapper>
                    <S.DetailTitle>Q & A</S.DetailTitle>
                </S.FooterWrapper>

                <CommentWriteContainer/>
                
                <CommentListContainer/>
        </S.Wrapper>
    )
}