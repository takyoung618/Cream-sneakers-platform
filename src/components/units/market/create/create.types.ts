import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreatePresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  onClickCreateButton: (data: any) => void;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onChangeContents: (value: string) => void;
  isOpen: boolean;
  address: string;
  onClickCancelButton: () => void;
  isEdit: boolean;
  data: Pick<IQuery, "fetchUseditem">;
  onClickEditButton: (data: any) => void;
  onClickAddressSearch: () => void;
  onClickCloseAddressSearch: () => void;
  onCompleteAddressSearch: () => void;
}
