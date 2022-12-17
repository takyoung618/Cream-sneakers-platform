import * as S from "./Footer.styles"

export default function FooterPresenter() {

    return (
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.LeftWrapper>
                    <S.InfoWrapper>
                        <S.InfoTitle>이용안내</S.InfoTitle>
                        <S.InfoSub>검수기준</S.InfoSub>
                        <S.InfoSub>이용정책</S.InfoSub>
                        <S.InfoSub>페널티 정책</S.InfoSub>
                        <S.InfoSub>커뮤니티 가이드라인</S.InfoSub>
                    </S.InfoWrapper>
                    <S.InfoRightWrapper>
                            <S.InfoTitle>고객지원</S.InfoTitle>
                            <S.InfoSub>공지사항</S.InfoSub>
                            <S.InfoSub>서비스 소개</S.InfoSub>
                            <S.InfoSub>쇼룸 안내</S.InfoSub>
                            <S.InfoSub>판매자 방문접수</S.InfoSub>
                    </S.InfoRightWrapper>
                </S.LeftWrapper>
                <S.RightWrapper>
                    <S.InfoTitle>고객센터 1588-7813</S.InfoTitle>
                    <S.CeoInfo>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)</S.CeoInfo>
                    <S.CeoInfo>점심시간 평일 13:00 - 14:00</S.CeoInfo>
                    <S.Info>1:1 문의하기는 앱에서만 가능합니다.</S.Info>
                    <S.Btn>자주 묻는 질문</S.Btn>
                </S.RightWrapper>
            </S.HeaderWrapper>
            <S.BusinessWrapper>
                <S.FooterWrapper>
                    <S.CompanyWrapper>
                        <S.InfoTitle>회사소개</S.InfoTitle>
                        <S.InfoTitle>인재채용</S.InfoTitle>
                        <S.InfoTitle>제휴제안</S.InfoTitle>
                        <S.InfoTitle>이용약관</S.InfoTitle>
                        <S.InfoTitle>개인정보처리방침</S.InfoTitle>
                    </S.CompanyWrapper>
                    <S.CeoWrapper>
                        <S.CeoInfo>크림 주식회사 · 대표 성지혜 사업자등록번호 : 570-88-01618 사업자정보확인통신판매업 : 제 2021-성남분당C-0093호</S.CeoInfo>
                        <S.CeoInfo>사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층호스팅 서비스 : 네이버 클라우드 ㈜</S.CeoInfo>
                    </S.CeoWrapper>
                </S.FooterWrapper>
                <S.IconWrapper>
                    <S.Icon src="https://cdn-icons-png.flaticon.com/128/87/87390.png"/>
                    <S.Icon src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"/>
                    <S.Icon src="https://cdn-icons-png.flaticon.com/128/4902/4902370.png"/>
                </S.IconWrapper>
            </S.BusinessWrapper>
            
        </S.Wrapper>
    )
}