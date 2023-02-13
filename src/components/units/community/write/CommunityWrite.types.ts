import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateCommunityInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface ICommunityWriteUIProps {
  isActive: boolean;
  // writerError: string;
  // passwordError: string;
  // titleError: string;
  // contentsError: string;
  inputsError: {
    writer: string;
    password: string;
    title: string;
    contents: string;
  };
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  zipcode: string;
  address: string;
  addressDetail: string;
  fileUrls: string[];
}
