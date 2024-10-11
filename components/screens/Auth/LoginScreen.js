import React, {useContext, useState} from "react";
import {SafeAreaView, Text, StyleSheet, ScrollView, Image, View, Dimensions} from "react-native";
import abia from "../../../assets/abiapay.png";
import {Button, Card, TextInput} from "react-native-paper";
import Input from "../../constants/Input";
import AuthButton from "../../constants/AuthButton";
import {PORTAL_API} from "../../../config";
import {AuthContext} from "../../../context/AuthContext";

export default function LoginScreen({navigation}){
    const [abssin, setAbssin] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])

    const {login} = useContext(AuthContext)
    const handleLogin = (abssin, password) => {
        login(abssin, password)
    }
    return(
        <ScrollView style={styles.container}>
            <View>
            <Image style={styles.image} source={abia} />
                <Text style={styles.text}>
                    Abia State Digital
                    Payment Platform, by
                    Abia for Abians
                </Text>
            </View>
            <View>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text style={styles.loginText}>Login</Text>
                        <View style={{marginTop: 10}}>
                            <Input
                                icon={'email'}
                                label={'ABSSIN'}
                                value={abssin}
                                setValue={setAbssin}
                                secure={false}/>
                        </View>
                        <View style={{marginTop: 5}}>
                            <Input
                                icon={'lock'}
                                value={password}
                                label={'Password'}
                                setValue={setPassword}
                                secure={true} />
                        </View>
                        <View style={{marginTop: 5}}>
                            <AuthButton disabled={false} pressed={() => handleLogin(abssin, password)} title={'Login Now'} />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5}}>
                            <Text style={styles.forgot} onPress={() => navigation.navigate('Forgot Pass')}>Forgot Password</Text>
                            <Text style={styles.retrieve} onPress={() => navigation.navigate('Retrieve Abssin')}>Retrieve Abssin</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'teal',
    },
    image:{
        marginTop: '30%',
        width: 170,
        height: 60,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text:{
        fontWeight: '600',
        color: '#fff',
        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 20,
        lineHeight: 25,
        textAlign: "center"
    },
    card:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width -20,
        margin: 10,
        marginTop: 30
    },
    loginText: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'center'
    },
    forgot:{
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
    },
    retrieve:{
        textAlign: 'right',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 10,
    }
})
