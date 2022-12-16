import * as S from "./Footer.styles"

export default function FooterPresenter() {

    return (
        <S.Wrapper>
            <S.LogoIcon>CREAM</S.LogoIcon>
            <S.InfoWrapper>
                <S.Info>(주)크림</S.Info>
                <S.InfoCeo>대표: 성지혜</S.InfoCeo>
            </S.InfoWrapper>
            <S.Info>주소:서울특별시 구로구 디지털로300,패스트파이브</S.Info>
            <S.Info>학원 등록 번호: 제 5845호</S.Info>
            <S.InfoWrapper>
                <S.Info>개인정보 처리방침</S.Info>
                <S.InfoService>서비스 이용약관</S.InfoService>
            </S.InfoWrapper>
            <S.Info>Copyright © 2022. Dingco Corp., Ltd.</S.Info>
        </S.Wrapper>
    )
}