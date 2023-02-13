import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../src/components/units/join_login/login/Login.queries";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

export default function MyPage() {
    const {data} = useQuery(FETCH_USER_LOGGED_IN)

    return (
        <MyPageContainer data={data}/>
    )
}