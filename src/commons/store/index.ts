import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const logInStatusState = atom({
  key: "logInStatus",
  default: false,
});


export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const isBucketActiveState = atom({
  key: "isBucketActiveStateKey",
  default: false
})

export const isWatchActiveState = atom({
  key: "isWatchActiveStateKey",
  default: false
})

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const isLoadedState = atom({
  key: "visitedPageState",
  default: false,
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});


export const TodayState = atom({
  key: "TodayState",
  default: false,
});
