import * as S from "./create.styles"
import React from "react";

export default function CreatePresenter() {

    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.Header>상품등록</S.Header>
            </S.HeaderWrapper>
            <S.TitleWrapper>
                <S.TitleName>상품명</S.TitleName>
                <S.input placeholder="상품명을 작성해주세요"/>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>상품 요약</S.Title>
                <S.input placeholder="상품요약을 작성해주세요"/>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>상품 내용</S.Title>
                <S.React placeholder="상품을 설명해주세요"/>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>판매 가격</S.Title>
                <S.input placeholder="판매 가격을 입력해주세요"/>
            </S.TitleWrapper>
            <S.TitleWrapper>
                <S.Title>태그 입력</S.Title>
                <S.input placeholder="#태그 #태그 #태그"/>
            </S.TitleWrapper>
            <S.TitleLocation>브랜드 위치</S.TitleLocation>
            <S.MapWrapper>
                <S.Map/>
                <S.LocationWrapper>
                    <S.SerchWrapper>
                        <S.Zipcode>07250</S.Zipcode>
                        <S.ZipcodeSerch>우편번호 검색</S.ZipcodeSerch>
                        </S.SerchWrapper>
                    <S.LocationInput/>
                    <S.LocationInput/>
                </S.LocationWrapper>
            </S.MapWrapper>
            <S.TitlePicture>사진첨부</S.TitlePicture>
            <S.ImageWrapper>
                <S.Image/>
                <S.Image/>
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <S.CancelButton>취소</S.CancelButton>
                <S.CreateButton>등록</S.CreateButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    )
}