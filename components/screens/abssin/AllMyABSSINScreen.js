import React from "react";
import {ScrollView, Text, StyleSheet, View, Dimensions, Image} from "react-native";
import {Button, Card, List} from "react-native-paper";
import avatar from '../../../assets/gamer.png'
import vehicle from '../../../assets/icons/vehicle-insurance.png'
import abia from "../../../assets/abia-new.png"
import {Colors} from "../../constants/Colors";
export default function AllMyABSSINScreen({navigation}){
    return(
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 5}}>
                            <Image style={{width: 80, height: 80, marginLeft: 'auto', marginRight: 'auto'}} source={avatar} />
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>Name:</Text>
                                <Text style={styles.subText}>John Doe</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>Phone:</Text>
                                <Text style={styles.subText}>09012345678</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>ABSSIN: </Text>
                                <Text style={styles.subText}>1122334455</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.title}>Address: </Text>
                                <Text style={styles.subText}> 123 Address way, Abia State</Text>
                            </View>
                        </View>

                    </View>
                </Card.Content>
            </Card>
            <View style={{marginLeft: 10, marginRight: 10}}>
                <List.Section>
                    <List.Subheader style={{fontWeight: '700', color: Colors.light.primary, fontSize: 16}}>My Actions</List.Subheader>
                    <List.Item
                        style={styles.list}
                        titleStyle={styles.listTitle}
                        title="Vehicle Registration"
                        onPress={() => navigation.navigate('Vehicle')}
                        left={() => <Image style={{height: 30, width: 30}} source={vehicle}/> }
                        right={() => <List.Icon icon="chevron-right" />}
                    />
                    <List.Item
                        style={styles.list}
                        titleStyle={styles.listTitle}
                        title="Receipts"
                        left={() => <List.Icon icon="folder" />}
                        right={() => <List.Icon icon="chevron-right" />}
                    />
                </List.Section>
            </View>
            <Card style={[styles.menuCard, {backgroundColor: '#fff'}]}>
                <Card.Content>
                    <Card.Title title="My Wallets" />
                    <Text style={{marginLeft: 10}}>To get started, Kindly activate your Wallet</Text>
                    <View style={{marginTop: 50, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image style={{width: 40, height: 40}} source={abia} />
                        <Button onPress={() => {}} style={{backgroundColor: '#777'}}>
                            View
                        </Button>
                    </View>
                </Card.Content>
            </Card>
            <Card style={[styles.menuCard, {backgroundColor: '#fff'}]}>
                <Card.Content>
                    <Card.Title title="My Wallets" />
                    <Text style={{marginLeft: 10}}>To get started, Kindly activate your Wallet</Text>
                    <View style={{marginTop: 50, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image style={{width: 40, height: 40}} source={abia} />
                        <Button icon="chevron-right" textColor={'#fff'} onPress={() => {}} style={{backgroundColor: '#09893E'}}>
                            Activate
                        </Button>
                    </View>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    card:{
        width: Dimensions.get('screen').width - 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingBottom: 10
    },
    menuCard: {
        width: Dimensions.get('screen').width - 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        marginBottom: 10,
        paddingBottom: 10
    },
    listTitle:{
        color: "#292D32",
        fontFamily: "DMSans_500Medium",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 20,
    },
    list: {
        width: Dimensions.get("screen").width - 32,
        marginLeft: 16,
        marginTop: 10,
        marginBottom: 1,
        marginRight: 16,
        height: 80,
        flexShrink: 0,
        backgroundColor: "#fff",
        borderRadius: 18,
        elevation: 4,
        shadowColor: "rgba(15, 13, 35, 0.04)",
    },
    title:{
        fontWeight: '600',
        fontSize: 14,
        marginTop: 6
    },
    subText:{
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'right',
        marginTop: 6
    }
})
