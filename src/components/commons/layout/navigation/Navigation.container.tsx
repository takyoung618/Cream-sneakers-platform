import { useRouter } from "next/router";
import NavigationPresenter from "./Navigation.presenter";


export default function NavigationContainer(){
    const router = useRouter();

    const MoveToList = () => {
        router.push("/main")
    }
    
    return (
        <NavigationPresenter
            MoveToList={MoveToList}
        > 
        </NavigationPresenter>
    )
}