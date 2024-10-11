import React, {useState} from "react";
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View,} from "react-native";
import abia from '../../../assets/adaptive-icon.png'
import {Card, RadioButton} from "react-native-paper";
import Input from "../../constants/Input";
import AuthButton from "../../constants/AuthButton";
import {PORTAL_API} from "../../../config";


export default function ForgotPasswordScreen({navigation}){
    const [abssin, setAbssin] = useState('')
    const [channel, setChannel] =useState('phone')
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState([])

    const forgotPass = () => {
        setLoading(true)
        fetch(`${PORTAL_API}user/forgot-password`,{
            headers:{
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "state_id": abssin,
                "verify_via": channel
            })
        }).then((res) => res.json())
            .then((resJson) => {
                setLoading(false)
                setResponse(resJson)
            })
    }
    return(
        <SafeAreaView style={styles.container}>
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
                        <Text style={styles.loginText}>Forgot Password</Text>
                        <View style={{marginTop: 10}}>
                            <Input value={abssin} setValue={setAbssin} icon={'email'} label={'ABSSIN'} secure={false}/>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="phone"
                                    color={'#000'}
                                    status={ channel === 'phone' ? 'checked' : 'unchecked' }
                                    onPress={() => setChannel('phone')}
                                />
                                <Text style={styles.radioText}>Phone</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <RadioButton
                                    value="email"
                                    color={'#000'}
                                    status={ channel === 'email' ? 'checked' : 'unchecked' }
                                    onPress={() => setChannel('email')}
                                />
                                <Text style={styles.radioText}>Email</Text>
                            </View>
                        </View>

                        <View style={{marginTop: 5}}>
                            <AuthButton disabled={false} pressed={forgotPass} title={'Submit'} />
                        </View>
                        <View>
                            <Text style={styles.forgot} onPress={() => navigation.navigate('Forgot Pass')}>Forgot Password</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
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
        color: '#000',
        width: 300,
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 18,
        textAlign: "center"
    },
    card:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width -20,
        margin: 10,
        marginTop: 20
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
    radioText:{
        fontSize: 13,
        color: '#000',
        fontWeight: '700',
        marginTop: 8,
        marginLeft: 5,
        lineHeight: 18
    }
})
