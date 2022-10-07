// import { useMutation } from "@apollo/client";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../commons/types/generated/types";
// import CreatePresenter from "./create.presenter";
// import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./create.queries";
// import { useRouter } from "next/router";
// import { message, Modal } from "antd";
// import { useRecoilState } from "recoil";
// import { isEditState } from "../../../commons/store";
// import { ICreateContainerProps } from "./create.types";

// const schema = yup.object({
//     name: yup.string().required("상품명을 입력해주세요."),
//     remarks: yup.string().required("상품 요약을 입력해주세요."),
//     contents: yup.string().required("상품 설명을 입력해주세요."),
//     price: yup
//       .number()
//       .required("상품 가격을 입력해주세요.")
//       .typeError("숫자만 입력 가능합니다."),
//   });

// export default function CreateContainer(props: ICreateContainerProps){
//   useEffect(() => {
//     if (props.data !== undefined) {
//       reset({
//         name: props.data.fetchUseditem.name,
//         remarks: props.data.fetchUseditem.remarks,
//         contents: props.data.fetchUseditem.contents,
//         price: props.data.fetchUseditem.price,
//         useditemAddress: {
//           zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
//           address: props.data.fetchUseditem.useditemAddress?.address,
//           addressDetail:
//             props.data.fetchUseditem.useditemAddress?.addressDetail,
//         },
//       });

//       if (props.data.fetchUseditem.tags?.length) {
//         setTags([...props.data.fetchUseditem.tags]);
//       }

//       if (props.data?.fetchUseditem.images?.length) {
//         setFileUrls([...props.data.fetchUseditem.images]);
//       }
//     }
//     setIsEdit(true);
//   }, [props.data]);



//     const [fileUrls, setFileUrls] = useState(["", ""]);

//     const onChangeFileUrls = (fileUrl: string, index: number) => {
//         const newFileUrls = [...fileUrls];
//         newFileUrls[index] = fileUrl;
//         setFileUrls(newFileUrls);
//     };

//     const onChangeTags = (value: string) => {
//         setTags(value);
//     };
    
//       const onChangeContents = (value: string) => {
//         setValue("contents", value === "<p><br></p>" ? "" : value);
//         trigger("contents");
//     };

//     const onClickAddressSearch = () => {
//       setIsOpen(true);
//     };

//     const onCompleteAddressSearch = (data: any) => {
//       setValue("useditemAddress.zipcode", data.zonecode);
//       setValue("useditemAddress.address", data.address);
//       trigger("useditemAddress.zipcode");
//       trigger("useditemAddress.address");
//       setIsOpen(false);
//     };

//     const [isOpen, setIsOpen] = useState(false);

//     const router = useRouter();

//     const [createUseditem] = useMutation<
//     Pick<IMutation, "createUseditem">,
//     IMutationCreateUseditemArgs
//   >(CREATE_USED_ITEM);

//   const [updateUseditem] = useMutation<
//     Pick<IMutation, "updateUseditem">,
//     IMutationUpdateUseditemArgs
//   >(UPDATE_USED_ITEM);

//   const {
//     register,
//     handleSubmit,
//     formState,
//     setValue,
//     trigger,
//     reset,
//     getValues,
//   } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

//   const [tags, setTags] = useState([]);

//   const [isEdit, setIsEdit] = useRecoilState(isEditState);

//   const onClickCancelButton = () => {
//     router.push("/main")
//   }

//   const onClickCreateButton = async (data: any) => {
//     try {
//       const result = await createUseditem({
//         variables: {
//           createUseditemInput: {
//             name: data.name,
//             remarks: data.remarks,
//             contents: data.contents,
//             price: data.price,
//             tags: [...tags],
//             useditemAddress: {
//               zipcode: data.useditemAddress.zipcode,
//               address: data.useditemAddress.address,
//               addressDetail: data.useditemAddress.addressDetail,
//             },
//             images: [...fileUrls],
//           },
//         },
//       });
//       console.log(data?.createUseditem)
//       router.push(`/usedItem/${result.data?.createUseditem._id}`);
//     } catch (error) {
//       if (error instanceof Error) Modal.error({ content: error.message });
//     }
//   };


//   const onClickEditButton = async (data: any) => {
//     setIsEdit(true);

//     // const currentFiles = JSON.stringify(fileUrls);
//     // const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
//     // const isChangedFiles = currentFiles !== defaultFiles;

//     // const updateProductInput: IUpdateUseditemInput = {};

//     // if (isChangedFiles) updateProductInput.images = fileUrls;

//     // if (!data.name && !data.remarks && !data.contents && !isChangedFiles) {
//     //   message.warning("수정한 내용이 없습니다.");
//     //   return;
//     // }

//     try {
//       const result = await updateUseditem({
//         variables: {
//           updateUseditemInput: {
//             name: data.name,
//             remarks: data.remarks,
//             contents: data.contents,
//             price: data.price,
//             tags: [...tags],
//             useditemAddress: {
//               zipcode: data.useditemAddress.zipcode,
//               address: data.useditemAddress.address,
//               addressDetail: data.useditemAddress.addressDetail,
//             },
//             images: [...fileUrls],
//           },
//           useditemId: String(router.query.productId),
//         },
//       });
//       router.push(`/usedItem/${result.data?.updateUseditem._id}`);
//     } catch (error) {
//       if (error instanceof Error) Modal.error({ content: error.message });
//     }
//   };
  


//     return (
//         <CreatePresenter
//             data={props.data}
//             fileUrls={fileUrls}
//             onChangeFileUrls={onChangeFileUrls}
//             register={register}
//             handleSubmit={handleSubmit}
//             formState={formState}
//             onClickCreateButton={onClickCreateButton}
//             onClickCancelButton={onClickCancelButton}
//             onChangeContents={onChangeContents}
//             tags={tags}
//             onChangeTags={onChangeTags}
//             isEdit={isEdit}
//             isOpen={isOpen}
//             address={getValues("useditemAddress.address")}
//             onClickAddressSearch={onClickAddressSearch}
//             onCompleteAddressSearch={onCompleteAddressSearch}
//             onClickEditButton={onClickEditButton}
//         />
//     )
// }

import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IMutation, IMutationCreateUseditemArgs, IMutationUpdateUseditemArgs } from "../../../commons/types/generated/types";
import CreatePresenter from "./create.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./create.queries";
import { useRouter } from "next/router";
import { message, Modal } from "antd";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";
import { ICreateContainerProps } from "./create.types";

const schema = yup.object({
    name: yup.string().required("상품명을 입력해주세요."),
    remarks: yup.string().required("상품 요약을 입력해주세요."),
    contents: yup.string().required("상품 설명을 입력해주세요."),
    price: yup
      .number()
      .required("상품 가격을 입력해주세요.")
      .typeError("숫자만 입력 가능합니다."),
  });

export default function CreateContainer(props: ICreateContainerProps){
  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        name: props.data.fetchUseditem.name,
        remarks: props.data.fetchUseditem.remarks,
        contents: props.data.fetchUseditem.contents,
        price: props.data.fetchUseditem.price,
        useditemAddress: {
          zipcode: props.data.fetchUseditem.useditemAddress?.zipcode,
          address: props.data.fetchUseditem.useditemAddress?.address,
          addressDetail:
            props.data.fetchUseditem.useditemAddress?.addressDetail,
        },
      });

      if (props.data.fetchUseditem.tags?.length) {
        setTags([...props.data.fetchUseditem.tags]);
      }

      if (props.data?.fetchUseditem.images?.length) {
        setFileUrls([...props.data.fetchUseditem.images]);
      }
    }
    setIsEdit(true);
  }, [props.data]);

  
    const [fileUrls, setFileUrls] = useState(["", ""]);

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    const onChangeTags = (value: string) => {
        setTags(value);
    };
    
      const onChangeContents = (value: string) => {
        setValue("contents", value === "<p><br></p>" ? "" : value);
        trigger("contents");
    };

    const onClickAddressSearch = () => {
      setIsOpen(true);
    };

    const onCompleteAddressSearch = (data: any) => {
      setValue("useditemAddress.zipcode", data.zonecode);
      setValue("useditemAddress.address", data.address);
      trigger("useditemAddress.zipcode");
      trigger("useditemAddress.address");
      setIsOpen(false);
    };

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const [tags, setTags] = useState([]);

  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const onClickCancelButton = () => {
    router.push("/main")
  }

  const onClickCreateButton = async (data: any) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: [...tags],
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
        },
      });
      console.log(data?.createUseditem)
      router.push(`/brand/${result.data?.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };


  const onClickEditButton = async (data: any) => {
    setIsEdit(true);

    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    // const isChangedFiles = currentFiles !== defaultFiles;

    // const updateProductInput: IUpdateUseditemInput = {};

    // if (isChangedFiles) updateProductInput.images = fileUrls;

    // if (!data.name && !data.remarks && !data.contents && !isChangedFiles) {
    //   message.warning("수정한 내용이 없습니다.");
    //   return;
    // }

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
            tags: [...tags],
            useditemAddress: {
              zipcode: data.useditemAddress.zipcode,
              address: data.useditemAddress.address,
              addressDetail: data.useditemAddress.addressDetail,
            },
            images: [...fileUrls],
          },
          useditemId: String(router.query._id),
        },
      });
      router.push(`/brand/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  


  
    return (
        <CreatePresenter
            data={props.data}
            fileUrls={fileUrls}
            onChangeFileUrls={onChangeFileUrls}
            register={register}
            handleSubmit={handleSubmit}
            formState={formState}
            onClickCreateButton={onClickCreateButton}
            onClickEditButton={onClickEditButton}
            onClickCancelButton={onClickCancelButton}
            onChangeContents={onChangeContents}
            tags={tags}
            onChangeTags={onChangeTags}
            isEdit={isEdit}
            isOpen={isOpen}
            address={getValues("useditemAddress.address")}
            onClickAddressSearch={onClickAddressSearch}
            onCompleteAddressSearch={onCompleteAddressSearch}
        />
    )
}