
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const fireContext = createContext(null)

       const googleIn = new GoogleAuthProvider(null)

const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)
     

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleOn = () =>{
        setLoading(true)
      return signInWithPopup(auth, googleIn )

    }

    const logOut = () =>{
        setLoading(true)
      signOut(auth)

    }


    useEffect( () =>{
      const unSubscribe = onAuthStateChanged( auth, currentUsr => {
           console.log(currentUsr)
           setUser(currentUsr)
           setLoading(false)
      })
      return() =>{
        unSubscribe();
      }
    } , [])

    const authInfo = {  user, createUser, signIn, googleOn, logOut, loading  }

    return (
        <div>

            <fireContext.Provider value={authInfo} >
            
              {children}

            </fireContext.Provider>
            
        </div>
    );
};

export default AuthContext;