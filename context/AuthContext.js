import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {PORTAL_API} from "../config";
import {AuthStore} from "../store";
import {Alert} from "react-native";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState([])
    const [userToken, setUserToken] = useState('')
    const [errorText, setErrorText] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    const register = (firstName, lastName, email, phone, password) => {
        setIsLoading(true)
        axios.post(`${PORTAL_API}agent/signup`, {
            firstName, lastName, email, phone, password
        }).then(res => {
            let userInfo = res.data
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
            console.log(userInfo)
        })
            .catch(e => {
                console.log(`Register error ${e}`)
                setIsLoading(false)
            })
    }
    const login = (abssin, password) => {
        if (!abssin) {
            alert('Please fill ABSSIN');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        setIsLoading(true)
        fetch(`${PORTAL_API}user/login`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: abssin,
                password: password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                setIsLoading(false)
                // showModal()
                if (responseJson.status === 200) {
                    setUserToken(responseJson.token)
                    setUserInfo(responseJson.state_id)
                    console.log(responseJson)
                    AsyncStorage.setItem('userToken', responseJson.token);
                    AsyncStorage.setItem('userInfo', responseJson.state_id);
                    AuthStore.update((s) => {
                        s.token = responseJson.token
                        s.message = responseJson.message
                        s.abssin = responseJson.state_id
                        // s.userCat = responseJson.body.user_cat
                        // s.name = responseJson.body.name
                        // s.phone = responseJson.body.phone
                        // s.updated_by = responseJson.body.update_by
                    })
                } else {
                    setErrorText(responseJson.message);
                    Alert.alert('Error','Please check your email id or password');
                }
            })
            .catch((e) => {
                console.log(e)
                Alert.alert('Error Processing request', e.message)
                setIsLoading(false)
            })

    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
            AsyncStorage.removeItem('userToken')
            AsyncStorage.removeItem('userInfo')
            setIsLoading(false)
    }
    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = await AsyncStorage.getItem('userInfo')
            userInfo = JSON.parse(userInfo)
           setUserToken(userToken)
            setIsLoading(false)
            if (userInfo){
                // console.log(userInfo)
                setUserInfo(userInfo)
                AuthStore.update((s) => {
                    s.token = userInfo.token
                    s.message = userInfo.message
                    s.abssin = userInfo
                    // s.lga = userInfo.body.lga
                    // s.userCat = userInfo.body.user_cat
                    // s.name = userInfo.body.name
                    // s.phone = userInfo.body.phone
                    // s.updated_by = userInfo.body.update_by
                })
                setUserToken(userToken)

            } else {
                Alert.alert('Session Error', 'Session has been Timed out due to Inactivity. Kindly Login again', [{text: 'OK',onPress: () => logout()}])
            }
        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        isLoggedIn().then()
    }, []);
    return (
        <AuthContext.Provider value={{
            isLoading, login, userInfo, isLoggedIn,
            register, logout, userToken
        }}>{children}</AuthContext.Provider>
    )
}
