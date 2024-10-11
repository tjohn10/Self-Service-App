import React from "react";
import {SafeAreaView, Text, StyleSheet, Dimensions, Image} from "react-native";
import {FlatGrid} from "react-native-super-grid";
import bill from '../../../assets/icons/bill.png'
import {Card} from "react-native-paper";

export default function BillsScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <FlatGrid
                itemDimension={80}
                data={[1,2,3,4,5,6]}
                renderItem={({ item }) => (
                    <Card>
                        <Card.Content>
                            <Image style={{width: 40, height: 40, marginLeft: 'auto', marginRight: 'auto'}} source={bill} />
                            <Text>{item}</Text>
                        </Card.Content>
                    </Card>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
