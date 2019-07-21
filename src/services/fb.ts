import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import fbConfig from "../../firebase-config.json";

export const fbApp = firebase.initializeApp(fbConfig);
export const firestore = fbApp.firestore();
export const auth = fbApp.auth();
