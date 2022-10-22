import InfiniteScroll from "react-infinite-scroller";
import {BiSearch} from "react-icons/bi"
import { getDate } from "../../commons/libraries/utils";
import * as S from "./Main.styles";
import { IMainPresenterProps } from "./Main.types";

export default function MainPresenter(
  props: IMainPresenterProps
) {
    return(
      <S.Wrapper>
          <S.BestWrapper>
              <S.BestTitle>BEST</S.BestTitle>
              <S.BestItemsWrapper>
              {props.useditemsBestData?.fetchUseditemsOfTheBest.map((el) => (
                    <S.BestItmesWrapper key={el._id} id={el._id}
                        onClick={props.onClickList}
                    >
                        <S.ProductWrapper
                      >
                          <S.Image
                          src={
                            el.images?.[0] || el.images?.[1] || el.images?.[2]
                              ? `http://storage.googleapis.com/${el.images?.[0]}`
                              : `/today.jpg`
                          }
                          />
                          {/* <S.Heart src="/images/greyHeart.png"/> */}
                          <S.PriceWrapper>
                              <S.Tag>{el.tags}</S.Tag>
                              <S.Price>{el.price}</S.Price>
                          </S.PriceWrapper>
                          <S.ProductName>{el.name}</S.ProductName>
                          <S.ProductContents>{el.contents}</S.ProductContents>
                      </S.ProductWrapper>
                    </S.BestItmesWrapper>
                ))}        
              </S.BestItemsWrapper>

          </S.BestWrapper>
          <S.CreateWrapper>
              <S.CreateButton onClick={props.onClickCreate}>상품 등록</S.CreateButton>
              <S.SearchWrapper>
                  <S.SearchInput> 
                  </S.SearchInput>
                  <BiSearch style={{ marginTop: "20px"}}/>
              </S.SearchWrapper>
          </S.CreateWrapper>

          <InfiniteScroll
            pageStart={0}
            loadMore={props.FetchMoreUseditems}
            hasMore={true || false}
        >
            <S.InfiniteScrollDiv>
            {props.useditemsData?.fetchUseditems.map((el) => (        
                <S.ListWrapper key={el._id} id={el._id}
                onClick={props.onClickList}
                >
                <S.ProductWrapper >
                    <S.Image
                    src={
                        el.images?.[0] || el.images?.[1] || el.images?.[2]
                          ? `http://storage.googleapis.com/${el.images?.[0]}`
                          : `/today.jpg`
                      }
                    />
                    {/* <S.Heart src="/images/greyHeart.png"/> */}
                    <S.PriceWrapper>
                        <S.Tag>{el.tags}</S.Tag>
                        <S.Price>{el.price}</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>{el.name}</S.ProductName>
                    <S.ProductContents>{el.contents}</S.ProductContents>
                </S.ProductWrapper>
                </S.ListWrapper>
            ))}
            </S.InfiniteScrollDiv>
        </InfiniteScroll>
      </S.Wrapper>
  )
}
