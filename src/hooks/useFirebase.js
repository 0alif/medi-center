import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider } from "firebase/auth";
import initializeAuthentication from "../components/firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

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
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    // login with email & password
    const handleLogin = event => {
        event.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    // sign in using facebook
    const signInUsingFacebook = () => {
        setIsLoading(true)
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => setUser(result.user))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }
    // manage signed-in user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    // log out
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
    }
    return {
        user,
        error,
        isLoading,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLogin,
        signInUsingGoogle,
        signInUsingFacebook,
        logOut
    }
}

export default useFirebase;