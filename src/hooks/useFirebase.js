import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // handle email
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    // handle password
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    // create user with email & password
    const handleRegister = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }
    // login with email & password
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }
    // sign in using google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
    }
    // manage signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unsubscribe;
    }, [])
    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
    }
    return {
        user,
        error,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;