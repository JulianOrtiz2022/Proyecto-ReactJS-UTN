import firebase from "firebase/compat/app";
// Agregar estas dos importaciones que en el pdf no estan.
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // importo la base de datos
    apiKey: "AIzaSyArsMJo72PoamkrxABE_v3AoxrvKMxcGiI",
    authDomain: "react-js-utn-734cd.firebaseapp.com",
    projectId: "react-js-utn-734cd",
    storageBucket: "react-js-utn-734cd.appspot.com",
    messagingSenderId: "308589909501",
    appId: "1:308589909501:web:ae0ecb999e10df323c7594",
    measurementId: "G-P2FBRFHBD3"
  };
  
  firebase.initializeApp(firebaseConfig)
  firebase.db = firebase.firestore() // genero la inicializacion
                                    // de la base de datos
  firebase.auth = firebase.auth() // genero la autenticacion
  export default firebase;
