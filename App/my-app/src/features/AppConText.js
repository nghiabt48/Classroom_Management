import React, { createContext, useState } from "react";
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google'
import { auth } from '../../firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession()


export const AppConText = createContext();
export const AppConTextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "394613229476-ismr5ihr3eck8htae0dfhtvnsd7fvgco.apps.googleusercontent.com"
    })
    React.useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params
            const credential = GoogleAuthProvider.credential(id_token)
            signInWithCredential(auth, credential)
            AsyncStorage.setItem('token', id_token)
        }
    }, [response])
    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setinfoUser(user) // email, displayName, photoURL
                setisLogin(true)
            } 
        })
        return () => unsub()
    }, [])
    return (
        <AppConText.Provider value={{ isLogin, setisLogin, infoUser, setinfoUser, promptAsync }}>
            {children}
        </AppConText.Provider>
    )
}