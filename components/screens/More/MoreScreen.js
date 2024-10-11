import React, {useContext} from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import {AuthContext} from "../../../context/AuthContext";

export default function MoreScreen(){
    const {logout} = useContext(AuthContext)
    return(
        <ScrollView style={styles.container}>
            <Text onPress={() => logout()}>Logout</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
