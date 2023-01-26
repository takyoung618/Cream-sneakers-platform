import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { recoilPersist } from 'recoil-persist';

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

const { persistAtom } = recoilPersist()

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const logInStatusState = atom({
  key: "logInStatusState",
  default: false,
});

export const errorModalStatus = atom({
  key: "errorModalStatusKey",
  default: false
})

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

  
