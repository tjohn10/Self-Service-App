import React from "react";
import {Image, SafeAreaView, Text, StyleSheet} from "react-native";
import {FlatGrid} from "react-native-super-grid";
import {Card} from "react-native-paper";
import star from "../../../assets/icons/star.png";

export default function AllEntitiesScreen(){
    const entities = [
        {
            name: 'MINISTRY OF JUSTICE',
            logo: star
        },
        {
            name: 'MINISTRY OF FINANCE',
            logo: star
        },
        {
            name: 'MINISTRY OF AGRICULTURE',
            logo: star
        },
        {
            name: 'MINISTRY OF WORKS',
            logo: star
        },
        {
            name: 'MINISTRY OF SCIENCE AND TECHNOLOGY',
            logo: star
        },
        {
            name: 'MINISTRY OF PUBLIC UTILITIES AND WATER SUPPLY',
            logo: star
        },
        {
            name: 'MINISTRY OF COMMERCE AND INDUSTRY',
            logo: star
        },
        {
            name: 'MINISTRY OF LANDS SURVEY AND URBAN PLANNING',
            logo: star
        },
    ]
    return(
        <SafeAreaView style={styles.container}>
            <FlatGrid
                itemDimension={120}
                spacing={20}
                style={{
                    backgroundColor: '#fff'
                }}
                data={entities}
                renderItem={({ item }) => (
                    <Card style={{backgroundColor: '#fff'}}>
                        <Card.Content>
                            <Image style={{width: 40, height: 40, marginLeft: 'auto', marginRight: 'auto'}} source={item.logo} />
                            <Text style={{textAlign: 'center', marginTop: 5}}>{item.name}</Text>
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
