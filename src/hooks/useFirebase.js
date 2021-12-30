import { useEffect, useState } from "react";

import initializeFirebase from "../Authentication/Firebase/firebase.init";

import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    updateProfile,
    getIdToken,
    signOut
} from "firebase/auth";

import axios from "axios";

// Initialize Firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [adminLoading, setAdminLoading] = useState(false);

    const auth = getAuth();

    // Providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Check User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    });
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    // Check if User is Admin Or Not
    // useEffect(() => {
    //     setAdminLoading(true);
    //     const url = `https://danialcodes-doctors-portal.herokuapp.com/users/${user.email}`;
    //     axios.get(url, user)
    //         .then(res => {
    //             const isAdmin = res.data.admin;
    //             setAdmin(isAdmin);
    //             setAdminLoading(false);
    //         });

    // }, [user]);

    // Redirect After Login 
    const redirect = (navigate, location = "/") => {
        const destination = location?.state?.from || "/";
        navigate(destination);
    }


    // Update firebase user data
    const firebaseUpdateUser = (updatedData) => {
        updateProfile(auth.currentUser, updatedData).then(() => {
            // 
        }).catch((error) => {
            setAuthError(error.message);
        });
    }

    // Firebase user registration
    const firebaseRegister = (name, email, password, navigate) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const updatedData = {
                    displayName: name
                }
                // Save New user to Database
                // saveUser(email, name);

                // Update User Name into firebase
                firebaseUpdateUser(updatedData);
                redirect(navigate);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // User Login
    const firebaseEmailPassLogin = (email, password, navigate, location = "/") => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                redirect(navigate, location);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // User Login Using Google
    const firebaseGoogleLogin = (navigate, location = "/") => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // saveUser(user.email, user.displayName);
                setAuthError("");
                redirect(navigate, location);

            }).catch((error) => {
                setAuthError(error.message);

            }).finally(() => setLoading(false));
    }
    // User Login Using Github
    const firebaseGithubLogin = (navigate, location = "/") => {
        setLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // saveUser(user.email, user.displayName);
                setAuthError("");
                redirect(navigate, location);

            }).catch((error) => {
                setAuthError(error.message);

            }).finally(() => setLoading(false));
    }

    // User SignOut
    const firebaseSignOut = () => {
        signOut(auth).then(() => {
            setAuthError("");
        }).catch((error) => {
            setAuthError(error.message);
        })
            .finally(() => setLoading(false));
    }

    // Save User To MongoDB Database
    // const saveUser = (email, displayName) => {
    //     const user = { email, displayName };
    //     const url = "https://danialcodes-doctors-portal.herokuapp.com/users";
    //     axios.put(url, user)
    //         .then(res => console.log("User Added to Database"));
    // }


    return {
        loading,
        user,
        admin,
        adminLoading,
        token,
        authError,
        firebaseRegister,
        firebaseEmailPassLogin,
        firebaseGoogleLogin,
        firebaseGithubLogin,
        firebaseSignOut
    }
}

export default useFirebase;