import { DrawerProps } from "antd";
import { MouseEvent } from "react";
import { FieldValues, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILayoutHeaderProps {
    isBlack: boolean
}

export interface ILayoutHeaderUIProps {
    isPointOpen: boolean
    isBtnActive: boolean
    bucketList: any
    isLogin: boolean
    userInfo: any
    isBlack: boolean
    onClickMove: (url: string) => (event: MouseEvent<HTMLElement>) => void
    onClickOpenPointModal: () => void
    onClickClosePointModal: () => void
    onClickLogOut: () => void
    onChangePointPrice: (data: any) => void
    onClickPointSubmit: (data: any) => void
    handleSubmit: UseFormHandleSubmit<FieldValues>
    register: UseFormRegister<FieldValues>
}

export interface ILayoutHeaderPointBtnProps {
    isBtnActive: boolean
}