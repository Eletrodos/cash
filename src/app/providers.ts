import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import UserModel from "../models/UserModel";
import Repository from "../repositories/Repository";
import CurrencyModel from "../models/CurrencyModel";

import config from "./config"

// ---- Firebase ----

const firebase = initializeApp(config.firebase);
const firestore = getFirestore(firebase);

// ---- Repositories ----

export const userRepository = new Repository(
  firestore,
  "users",
  UserModel
);

export const currencyRepository = new Repository(
  firestore,
  "currencies",
  CurrencyModel
);