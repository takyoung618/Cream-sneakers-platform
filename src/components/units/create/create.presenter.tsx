import * as S from "./create.styles"
import React, { useEffect, useState } from "react";
import UploadImageContainer from "../../commons/uploadImage/UploadImage.container";
import { v4 as uuidv4 } from "uuid";
import KaKaoMap from "../../commons/kakaoMap-create";
import { ICreatePresenterProps } from "./create.types";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/store";

export default function CreatePresenter(props: ICreatePresenterProps) {
    const [defaultValue, setDefaultValue] = useState("");
    const [isEdit, setIsEdit] = useRecoilState(isEditState);

    useEffect(() => {
        if (props.data?.fetchUseditem.contents) {
          setDefaultValue(props.data?.fetchUseditem.contents);
        }
        setIsEdit(true);
    }, [props.data?.fetchUseditem.contents]);
   
    return (
        <form
            onSubmit = { 
            props.isEdit 
            ? props.handleSubmit(props.onClickEditButton) 
            : props.handleSubmit(props.onClickCreateButton) }
        >
            {props.isOpen && (
            <S.AddressModal
            visible={true}
            onCancel={props.onClickCloseAddressSearch}
            >
            <S.AddressSearch
                onComplete={props.onCompleteAddressSearch}
            ></S.AddressSearch>
            </S.AddressModal>
            )}
        <S.Wrapper>
            <S.HeaderWrapper>
                <S.Header>{ props.isEdit ? "상품 수정" : "상품 등록" }</S.Header>
            </S.HeaderWrapper>
            <S.InputWrapper>
                <S.TitleWrapper>
                    <S.TitleName>상품명</S.TitleName>
                    <S.input placeholder="상품명을 작성해주세요"
                        {...props.register("name")}
                    />
                </S.TitleWrapper>
                <S.InputError>{props.formState.errors.name?.message}</S.InputError>
            </S.InputWrapper>

            <S.InputWrapper>
                <S.TitleWrapper>
                    <S.TitleName4>브랜드명</S.TitleName4>
                    <S.input placeholder="상품요약을 작성해주세요"
                    {...props.register("remarks")}
                />
                </S.TitleWrapper>
                <S.InputError>
                {props.formState.errors.remarks?.message}
                </S.InputError>
            </S.InputWrapper>

            
            <S.ReactWrapper>
                <S.Title>상품 내용</S.Title>
                {props.isEdit ? (
                    props.data?.fetchUseditem.contents && (
                    <S.React
                        onChange={props.onChangeContents}
                        placeholder="상품을 설명해주세요."
                        defaultValue={props.data?.fetchUseditem.contents}
                    ></S.React>
                    )
                ) : (
                    <S.React
                    onChange={props.onChangeContents}
                    placeholder="상품을 설명해주세요."
                    ></S.React>
                )}
            </S.ReactWrapper>
        
            <S.InputWrapper>
                <S.TitleWrapper>
                    <S.TitleName4>판매 가격</S.TitleName4>
                    <S.input 
                   placeholder="판매 가격을 입력해주세요"
                   {...props.register("price")}
                    />
                </S.TitleWrapper>
                <S.InputError>{props.formState.errors.price?.message}</S.InputError>
            </S.InputWrapper>

            <S.InputWrapper>
                <S.TitleWrapper>
                    <S.TitleName4>태그 입력</S.TitleName4>
                    <S.input 
                    type="text"
                    placeholder="#태그 #태그 #태그"
                    {...props.register("tags")}
                />
                </S.TitleWrapper>
            </S.InputWrapper>
            <S.LocationTitleWrapper>
                <S.TitleLocation>상품 위치</S.TitleLocation>
            </S.LocationTitleWrapper>
            
            <S.MapWrapper>
                <KaKaoMap address={props.address} />
                <S.LocationWrapper>
                    <S.SerchWrapper>
                        <S.Zipcode
                        {...props.register("useditemAddress.zipcode")}
                        type="num"
                        placeholder="07250"
                        readOnly
                        >
                        </S.Zipcode>
                        <S.ZipcodeSerch
                            type="button"
                            onClick={props.onClickAddressSearch}
                        >우편번호 검색
                        </S.ZipcodeSerch>
                        </S.SerchWrapper>
                    <S.LocationInput
                        {...props.register("useditemAddress.address")}
                    />
                    <S.LocationInput
                        {...props.register("useditemAddress.addressDetail")}
                    />
                </S.LocationWrapper>
            </S.MapWrapper>
            <S.LocationTitleWrapper>
                <S.TitlePicture>사진첨부</S.TitlePicture>
            </S.LocationTitleWrapper>
            
            <S.ImageWrapper>
            {props.fileUrls.map((el, index) => (
                <UploadImageContainer
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                ></UploadImageContainer>
              ))}  
            </S.ImageWrapper>
            <S.ButtonWrapper>
                <S.CancelButton type="button" onClick={props.onClickCancelButton}>취소</S.CancelButton>
                <S.CreateButton type="submit">등록</S.CreateButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    </form>   
    )
}