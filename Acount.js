import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { onLoginSuccess } from "./App";

export  function signUp(email,password) {
    if (email && password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Користувач створений:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Помилка при створенні користувача:", errorCode, errorMessage);
            });
    }
  }
 
export function signIn (email,password){
    
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Успішний вхід! Користувач:', user.uid);
                    onLoginSuccess();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Помилка входу:', errorCode, errorMessage);
                });
        }
      

  }
  