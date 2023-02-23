import { useRouter } from "next/router";
import NavigationPresenter from "./Navigation.presenter";

export default function NavigationContainer() {
  const router = useRouter();

  const MoveToList = () => {
    router.push("/main");
  };

  const MoveToHome = () => {
    router.push("/home");
  };

  const MoveToMy = () => {
    router.push("/myPage");
  };

  const MoveToBoard = () => {
    router.push("/boards");
  };

  return (
    <NavigationPresenter
      MoveToHome={MoveToHome}
      MoveToList={MoveToList}
      MoveToMy={MoveToMy}
      MoveToBoard={MoveToBoard}
    ></NavigationPresenter>
  );
}
