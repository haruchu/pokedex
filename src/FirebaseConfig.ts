import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBBLdSyf2SvJjiO5a7hcv6eEU8eH-h3Ofk",
  authDomain: "pokedex-haru.firebaseapp.com",
  projectId: "pokedex-haru",
  storageBucket: "pokedex-haru.appspot.com",
  messagingSenderId: "866441621052",
  appId: "1:866441621052:web:c805b837d80cea6fa09d39",
  measurementId: "G-NNERWZYLV7",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
