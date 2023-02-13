import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IJoinPresenterProps {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickJoin: (data: any) => void;
    register: UseFormRegister<FieldValues>;
    formState: FormState<FieldValues>;
    onClickCancel: () => void;
}