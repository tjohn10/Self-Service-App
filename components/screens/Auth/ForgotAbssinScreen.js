import React, {useState} from "react";
import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View} from "react-native";
import abia from "../../../assets/abiapay.png";
import {Card} from "react-native-paper";
import Input from "../../constants/Input";
import AuthButton from "../../constants/AuthButton";

export default function ForgotAbssinScreen({navigation}){
    const [abssin, setAbssin] = useState('')

    const retrieve = () => {

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
                        <Text style={styles.loginText}>Retrieve ABSSIN</Text>
                        <View style={{marginTop: 10}}>
                            <Input icon={'email'} label={'ABSSIN'} secure={false}/>
                        </View>
                        <View style={{marginTop: 5}}>
                            <AuthButton disabled={false} pressed={retrieve} title={'Login Now'} />
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
    container: {
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
})
