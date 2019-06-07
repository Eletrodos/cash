import firebase from "firebase";

/** Configurações de autenticação do firebase ui  */
export const fbUiConfig = {
  signInSuccessUrl: "./home",
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};
