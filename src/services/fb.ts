import firebase from "firebase";

import fbConfig from "../../firebase-config.json";

export const fbApp = firebase.initializeApp(fbConfig);

export const firestore = fbApp.firestore();

export const fbAuth = fbApp.auth();
