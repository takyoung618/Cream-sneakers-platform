import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { logInStatusState } from "../../../../commons/store";
import { AiOutlineClose } from "react-icons/ai";
import * as S from "./header.styles"
import styled from "@emotion/styled";
import { ILayoutHeaderUIProps } from "./header.types";




export default function HeaderPresenter(props) {
    const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

    const UserInfo = getUserInfo();

    return (
            <S.Wrapper>
                <S.HeaderWrapper>
                    {!logInStatus ? (
                        <>
                            <S.Login onClick={props.onClickLogin}>로그인</S.Login>
                            <S.Signup onClick={props.onClickJoin}>회원가입</S.Signup>
                            <S.Basket>장바구니</S.Basket>
                            <S.BasketCount>
                                <S.Count>0</S.Count>
                            </S.BasketCount>
                        </>
                    ) : (
                        <>
                            <S.Point>
                                {UserInfo?.fetchUserLoggedIn.name} 님 포인트{" "}
                                {UserInfo?.fetchUserLoggedIn.userPoint.amount}P
                            </S.Point>
                            <S.ChargeButton onClick={() => props.setModalIsOpen(true)}>충전</S.ChargeButton>
                            <S.LogOut onClick={props.onClickLogOut}>로그아웃</S.LogOut>
                            <S.Basket>장바구니</S.Basket>
                            <S.BasketCount>
                                <S.Count>{ props.baskets.length }</S.Count>
                            </S.BasketCount>
                        </>
                    )}       
                </S.HeaderWrapper>

                <S.ModalStyle isOpen={props.modalIsOpen}>
                <S.ModalCloseButton onClick={() => props.setModalIsOpen(false)}>
                    <AiOutlineClose style={{ width: "16px", height: "16px" }} />
                </S.ModalCloseButton>
                <S.ModalTitle>충전하실 금액을 선택해주세요!</S.ModalTitle>
                <S.ModalSelect value={props.selected} onChange={props.onChangeSelect}>
                    <option value="">포인트 선택</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="2000">2,000</option>
                    <option value="5000">5,000</option>
                </S.ModalSelect>
                <S.ModalButton isActive={props.isActive} onClick={props.onClickCharge}>
                    충전하기
                </S.ModalButton>
                </S.ModalStyle>
            </S.Wrapper>
    )
}