import React, { createContext, useState } from "react";
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google'
import { auth } from '../../firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosIntance from "../../AxiosIntance";
WebBrowser.maybeCompleteAuthSession()


export const AppConText = createContext();
export const AppConTextProvider = (props) => {
    const { children } = props;
    const [isLogin, setisLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});
    const [userRole, setUserRole] = useState("");
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "394613229476-ismr5ihr3eck8htae0dfhtvnsd7fvgco.apps.googleusercontent.com"
    })

        //check user role 
       const checkUserRole = async () => {
        try {
            const responsee = await AxiosIntance().get("/users/me");
            if (responsee.status === "success") {
                if(responsee.user.auth_role === "NhanVien"){
                    console.log("nv")
                    setUserRole("NhanVien");
                }else{
                    console.log("gv")
                    setUserRole("GiangVien");
                }
              
            }
        } catch (error) {
            console.error("Error checking user role:", error);
            setUserRole(null)
        }
    };

    React.useEffect(() => {
        if (response?.type == "success") {
            const { id_token } = response.params
            const credential = GoogleAuthProvider.credential(id_token)
            signInWithCredential(auth, credential)
            AsyncStorage.setItem('token', id_token)
            checkUserRole().then((role) => {
                if (role === "NhanVien") {
                  setisLogin(true);
                } else {
                  setisLogin(true);
                }
              });
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
        <AppConText.Provider value={{ isLogin, setisLogin, infoUser, setinfoUser, promptAsync, userRole, setUserRole, checkUserRole }}>
            {children}
        </AppConText.Provider>
    )
}