import { useAuthState, useSignOut } from "react-firebase-hooks/auth"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth , db} from "../lib/firebase";
import { useState, useEffect } from "react";
import { DASHBOARD, LOGIN } from "../lib/routes";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore"
import { isUsernameExist } from "../utils/isUsernameExist"


export function useAuth(){
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=> {
        async function fetchData() {
            setLoading(true)
            const ref = doc(db, "users", authUser.uid);
            const docSnap = await getDoc(ref)
            setUser(docSnap.data())
            setLoading(false);
        }
        if (!authLoading){
            if(authUser) fetchData();
            else setLoading(false)
        }
    }, [authLoading, authUser]);

    return {user: user, isLoading: isLoading, error: error};
}

export function useLogin(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({email, password, redirectTo=DASHBOARD}){
        setLoading(true);
        try{
            await signInWithEmailAndPassword(auth, email, password)            
            toast({title: "You are logged in", status: "success", isClosable: true, position: "top", duration: 5000 });
            navigate (redirectTo);
        } catch (error) {
            toast({title: "Log in failed", description: error.message, status: "error", isClosable: true, position: "top", duration: 5000});
            setLoading(false);
            return false;
        }
        setLoading(false)
        return true;
    }
    return {login, isLoading}
}

export function useRegister(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function register({username, email, password, redirectTo = DASHBOARD})
    
    {
    setLoading(true);
    
    const usernameExists = await isUsernameExist(username);

        if (usernameExists) {
            toast({
                title: "Username already exists",
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            setLoading(false);
        } 
        else {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);

                await setDoc(doc(db, "users", res.user.uid),{
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: "",
                    date: Date.now(),
                });
                toast({
                    title: "Account created",
                    description: "You are logged in",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
                navigate(redirectTo);

            } catch (error) {
                toast({
                    title: "Signup Failed",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
            }  finally {
                setLoading(false);
            }
        }
    } 
    return {register, isLoading};
}

export function useLogout(){
    const [signOut, isLoading, error] = useSignOut(auth);
    const navigate = useNavigate();
    const toast = useToast();

    async function logout(){
        if(await signOut()) {
            toast({
                title: "Successfully logged out",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            navigate(LOGIN);
        }
        else if (error){
            toast({
                title: "Unknown error",
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
        }
    }
    return {logout, isLoading};    
};