import {atom} from "recoil";
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
})

export const choosenLangstate = atom({
  key: "choosenLang",
  default: {
    lang: "en",
  },
  effects_UNSTABLE: [persistAtom],
})