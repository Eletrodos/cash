import firebase from "firebase";
import firebaseui from "firebaseui";

import config from "../../firebase-config.json";

/** Inicializa o firebase */
export const initialize = () => {
  firebase.initializeApp(config);
};

/** Cria as opções de login */
export const createLoginOptions = (elemId: string) => {
  var uiConfig = {
    signInSuccessUrl: "./home",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start(elemId, uiConfig);
};
