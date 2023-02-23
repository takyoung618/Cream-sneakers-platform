import { DrawerProps } from "antd";
import { MouseEvent } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILayoutHeaderUIProps {
  onClickLogin: () => void;
  onClickJoin: () => void;
  onClickBucket: () => void;
  setModalIsOpen: any;
  baskets: any;
  modalIsOpen: boolean;
  selected: any;
  onChangeSelect: any;
  isActive: any;
  onClickLogOut: () => void;
  onClickHome: () => void;
  onClickCharge: () => void;
}
