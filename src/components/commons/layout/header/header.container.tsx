import { useRouter } from "next/router";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
    const router = useRouter();

    const onClickLogin = () => {
        router.push("/login")
    }

    const onClickJoin = () => {
        router.push("/join")
    }


    return (
        <HeaderPresenter
        onClickLogin={onClickLogin}
        onClickJoin={onClickJoin}
        />
    )
}