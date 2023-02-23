import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import CreateContainer from "../../../src/components/units/market/create/create.container";

function CreatePage() {
  return <CreateContainer isEdit={false}></CreateContainer>;
}
export default withAuth(CreatePage);
