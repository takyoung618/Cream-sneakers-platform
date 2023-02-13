import { FieldValues, FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface ILoginPresenterProps{
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onClickLogin: (data: any) => void;
    register: UseFormRegister<FieldValues>;
    formState: FormState<FieldValues>;
}

