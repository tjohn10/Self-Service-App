import React from "react";
import {TextInput} from "react-native-paper";
import {Dimensions, StyleSheet} from "react-native";

export default function Input({label, icon, secure, value, setValue}){
    return(
        <TextInput
            style={styles.input}
            label={label}
            secureTextEntry={secure}
            value={value}
            onChangeText={(text) => setValue(text)}
            left={<TextInput.Icon icon={icon} />}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        width: 300,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderStyle: "solid",
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#777777',
        borderWidth: 1
    }
})
