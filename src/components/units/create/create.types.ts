import {
    FieldValues,
    FormState,
    UseFormHandleSubmit,
    UseFormRegister,
  } from "react-hook-form";
import { IQuery } from "../../../commons/types/generated/types";

  
  export interface ICreateContainerProps {
    isEdit: Boolean;
    data: Pick<IQuery, "fetchUseditem">;
  }
  
  export interface ICreatePresenterProps {
    register: UseFormRegister<FieldValues>;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    formState: FormState<FieldValues>;
    onClickCreateButton: (data: any) => void;
    fileUrls: string[];
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    onChangeContents: (value: string) => void;
    onClickAddressSearch: () => void;
    onCompleteAddressSearch: (data: any) => void;
    onClickCloseAddressSearch: () => void;
    isOpen: boolean;
    address: string;
    onClickCancel: () => void;
    isEdit: boolean;
    data: Pick<IQuery, "fetchUseditem">;
    onClickEditButton: (data: any) => void;
    tags: never[];
    onChangeTags: (value: string) => void;
  }
  