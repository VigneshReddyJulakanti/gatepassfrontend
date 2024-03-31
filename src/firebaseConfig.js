import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "gatepass-.firebaseapp.com",
    projectId: "gatepass-",
    storageBucket: "gatepass-.appspot.com",
    messagingSenderId: "", 
    appId: "1::web:"
  };
 

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };
  

  
