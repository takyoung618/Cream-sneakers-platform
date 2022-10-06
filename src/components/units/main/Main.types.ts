import { IQuery, IUseditem } from "../../../commons/types/generated/types"

export interface IMainPresenterProps {
    data: Pick<IQuery, "fetchUseditems"> | undefined
    useditemsBestData: Pick<IQuery, "fetchUseditemsOfTheBest"> | undefined;
    useditemsData: Pick<IQuery, "fetchUseditems"> | undefined;
    FetchMoreUseditems: () => void
    onClickList: (today: IUseditem) => () => void
    onClickCreate: () => void
}