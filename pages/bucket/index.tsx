import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BucketContainer from "../../src/components/units/bucket/bucket.container";

function BucketPage(){
    return (
        <BucketContainer/>
    )
}

export default withAuth(BucketPage)