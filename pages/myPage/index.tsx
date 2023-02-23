import { useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { FETCH_USER_LOGGED_IN } from "../../src/components/units/join_login/login/Login.queries";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <MyPageContainer data={data} />;
}

export default withAuth(MyPage);
