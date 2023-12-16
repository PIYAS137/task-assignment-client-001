import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase.config"


export const AuthContext = createContext(null)
const FirebaseAuth = getAuth(app);

const FirebaseContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loader, setLoader] = useState(true)



    const FirebaseSignUpUser = (email, pass) => {
        setLoader(true);
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const FirebaseLoginUser = (email, pass) => {
        setLoader(true);
        return signInWithEmailAndPassword(FirebaseAuth, email, pass);
    }

    const FirebaseSignOutUser = () => {
        setLoader(true);
        return signOut(FirebaseAuth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(FirebaseAuth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            return unSubscribe()
        }
    })

    const FirebaseUpdateUser = (val,name,phone)=>{
        setLoader(true)
        return updateProfile(val,{
            displayName:name,
            phoneNumber:phone
        })
    }

    const authInfo = {
        user,
        loader,
        FirebaseLoginUser,
        FirebaseSignUpUser,
        FirebaseSignOutUser,
        FirebaseUpdateUser
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseContext