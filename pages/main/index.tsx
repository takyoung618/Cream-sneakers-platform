import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MainContainer from "../../src/components/units/market/main/Main.container";

function MainPage() {
  return <MainContainer />;
}

export default withAuth(MainPage);
