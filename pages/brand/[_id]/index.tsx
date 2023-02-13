import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import DetailContainer from "../../../src/components/units/market/detail/detail.container";

function DetailPage(){
    
    return (
        <DetailContainer></DetailContainer>
    )
}
export default withAuth(DetailPage)