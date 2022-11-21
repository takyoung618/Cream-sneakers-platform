import InfiniteScroll from "react-infinite-scroller";
import {BiSearch} from "react-icons/bi"
import { getDate } from "../../commons/libraries/utils";
import * as S from "./Main.styles";
import { IMainPresenterProps } from "./Main.types";
import Searchbars01 from "../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";

export default function MainPresenter(
  props: IMainPresenterProps
) {
    return(
      <S.Wrapper>
          <S.BestWrapper>
              <S.BestTitle>BEST</S.BestTitle>
              <S.HeaderWrapper>
              {props.useditemsBestData?.fetchUseditemsOfTheBest.map((el) => (
                    <S.BestItemsWrapper key={el._id} id={el._id}
                        onClick={props.onClickList}
                    >
                        <S.ProductWrapper
                      >
                          <S.Image
                          src={
                            el.images?.[0] || el.images?.[1]
                              ? `http://storage.googleapis.com/${el.images?.[0]}`
                              : `images/프로필 이미지.png`
                          }
                          />
                          <S.PriceWrapper>
                              <S.Tag>{el.tags}</S.Tag>
                              <S.Price>{el.price}</S.Price>
                          </S.PriceWrapper>
                          <S.ProductName>{el.name}</S.ProductName>
                          <S.ProductContents>{el.contents}</S.ProductContents>
                      </S.ProductWrapper>
                    </S.BestItemsWrapper>
                ))}        
              </S.HeaderWrapper>
          </S.BestWrapper>

          <S.CreateWrapper>
              <S.CreateButton onClick={props.onClickCreate}>상품 등록</S.CreateButton>
              <S.SearchWrapper>
                  <Searchbars01
                    refetch={props.refetch}
                    onChangeKeyword={props.onChangeKeyword}
                  />
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
                    <S.PriceWrapper>
                        <S.Tag>{el.tags}</S.Tag>
                        <S.Price>{el.price}</S.Price>
                    </S.PriceWrapper>
                    <S.ProductName>
                        {el.name
                            .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                            .split("@#$%")
                            .map((el) => (
                                <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                                    {el}
                                </S.TextToken>

                        ))}
                    </S.ProductName>
                    <S.ProductContents>{el.contents}</S.ProductContents>
                </S.ProductWrapper>
                </S.ListWrapper>
            ))}
            </S.InfiniteScrollDiv>
        </InfiniteScroll>
      </S.Wrapper>
    )
}