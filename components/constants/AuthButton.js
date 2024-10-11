import React from "react";
import { StyleSheet} from "react-native";
import {Button} from "react-native-elements";

export default function AuthButton({title, disabled , pressed}){
    return(
        <Button
            title={title}
            disabled={disabled}
            onPress={pressed}
            titleStyle={{color: '#fff'}}
            buttonStyle={styles.button}
        />
    )
}

const styles = StyleSheet.create({
    button:{
        width: 300,
        marginTop: 27,
        height: 48,
        backgroundColor: 'teal',
        opacity: 0.9,
        borderRadius: 8,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
})
