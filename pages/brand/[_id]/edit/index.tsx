import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchUseditemArgs } from "../../../../src/commons/types/generated/types";
import CreateContainer from "../../../../src/components/units/create/create.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      buyer {
        _id
        email
        name
        picture
      }
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;

export default function DetailPage(){
    const router = useRouter();

    const { data } = useQuery<
        Pick<IQuery, "fetchUseditem">,
        IQueryFetchUseditemArgs
    >(FETCH_USED_ITEM, {
        variables: { useditemId: String(router.query._id) },
    });

    return (
      <CreateContainer isEdit={true} data={data}/>
    )
}