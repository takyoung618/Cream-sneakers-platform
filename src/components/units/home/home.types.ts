import { IQuery } from "../../../commons/types/generated/types";

export interface IHomePageContainerProps {

}

export interface IHomePagePresenterProps {
    data: Pick<IQuery, "fetchUseditems">;
    onClickList: (event: any) => void;
}
