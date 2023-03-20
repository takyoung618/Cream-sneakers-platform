import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const logInStatusState = atom({
  key: "logInStatusState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const defaultPasswordState = atom({
  key: "defaultPasswordState",
  default: {
    defaultPassword: "",
  },
});

export const errorModalStatus = atom({
  key: "errorModalStatusKey",
  default: false,
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
    picture: "",
    userPoint: {
      amount: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});

export const isBucketActiveState = atom({
  key: "isBucketActiveStateKey",
  default: false,
});

export const isPickActiveState = atom({
  key: "isPickActiveStateKey",
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
