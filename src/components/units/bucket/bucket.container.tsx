import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IUseditem } from "../../../commons/types/generated/types";
import BucketPresenter from "./bucket.presenter";

export interface IBucketContainerProps {
    onClicDetial: (event: any) => void;
}

export default function BucketContainer(props: IBucketContainerProps) {
    const router = useRouter()
    const [baskets, setBaskets] = useState<IUseditem[]>([]);
    const [empty, setEmpty] = useState(false)
    
    const handleImageError = (event: any) => {
        event.target.src = '/default.png';
    };

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('baskets') || '[]');
        setBaskets(result);
    }, []);

    const onClickDetail = (event : any) => {
        router.push(`/brand/${event.currentTarget.id}`);
    }

    const onClickShop = (event : any) => {
        router.push("main")
    }

    const isEmpty = (event : any) => {
        if(setBaskets.length === 0 ){
            setEmpty(true)
        }
    }

    

    return (
        <BucketPresenter
            baskets={baskets}
            handleImageError={handleImageError}
            onClickDetail={onClickDetail}
            onClickShop={onClickShop}
            isEmpty={isEmpty}
        />
    )
}
