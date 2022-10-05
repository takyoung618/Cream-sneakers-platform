import { IQuery, IUseditem } from "../../../commons/types/generated/types"

export interface IProductListPresenterProps {
    data: Pick<IQuery, "fetchUseditems"> | undefined
    FetchMoreUseditems: () => void
    onClickList: (today: IUseditem) => () => void
}