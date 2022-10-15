import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../../commons/libraries/getUserInfo";
import { logInStatusState } from "../../../../commons/store";
import {temp} from "../../../units/detail/detail.container"
import * as S from "./header.styles"

export default function HeaderPresenter(props) {
    const [logInStatus, setLogInStatus] = useRecoilState(logInStatusState);

    const UserInfo = getUserInfo();

    return (
            <S.Wrapper>
                <S.LogoImage src="/images/dingco-logo.png"
                    onClick={props.onClickHome}
                />
                <S.HeaderWrapper>
                    {!logInStatus ? (
                        <>
                            <S.Login onClick={props.onClickLogin}>로그인</S.Login>
                            <S.Signup onClick={props.onClickJoin}>회원가입</S.Signup>
                        </>
                    ) : (
                        <>
                            <S.Point>
                                {UserInfo?.fetchUserLoggedIn.name} 님 포인트{" "}
                                {UserInfo?.fetchUserLoggedIn.userPoint.amount}P
                            </S.Point>
                            <S.ChargeButton onClick={() => props.setModalIsOpen(true)}>충전</S.ChargeButton>
                            <S.LogOut onClick={props.onClickLogOut}>로그아웃</S.LogOut>
                        </>
                    )}       
                    <S.Basket>장바구니</S.Basket>
                    <S.BasketCount>
                        <S.Count>{ props.bucketList.length }</S.Count>
                    </S.BasketCount>
                </S.HeaderWrapper>
            </S.Wrapper>
    )
}