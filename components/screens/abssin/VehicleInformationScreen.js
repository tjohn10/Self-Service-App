import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {Card} from "react-native-paper";
import avatar from "../../../assets/gamer.png";
import abia from "../../../assets/abia-new.png"
import qrcode from "../../../assets/qr-code.png"

export default function VehicleInformation(){
    return(
        <ScrollView style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <View>
                        <View>
                            <Image style={{marginRight: 'auto', marginLeft: 'auto', width: 50, height: 50}} source={abia} />
                            <View>
                                <Text style={styles.abia}>ABIA STATE</Text>
                                <Text style={styles.mot}>MINISTRY OF TRANSPORT</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', width: Dimensions.get('screen').width - 10, marginRight: 5}}>
                            <View>
                                <Image style={{width: 60, height: 60, marginTop: 15}} source={avatar} />
                            </View>
                            <View style={{marginLeft: 5}}>
                                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                    <Text style={styles.title}>Plate Number:</Text>
                                    <Text style={styles.subText}>BM863KUJ</Text>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.title}>Vehicle Model :</Text>
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
                            <View>
                                <Image style={{width: 70, height: 70, marginTop: 15}} source={qrcode} />
                            </View>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <View style={{marginTop: 10}}>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    card:{
        width: Dimensions.get('screen').width,
        marginTop: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingBottom: 10
    },
    title:{
        fontWeight: '600',
        fontSize: 14,
        marginTop: 6
    },
    subText:{
        fontWeight: '400',
        fontSize: 12,
        marginLeft: 5,
        marginRight: 5,
        width: 100,
        textAlign: 'right',
        marginTop: 6
    },
    abia: {
        fontWeight: '700',
        fontSize: 20,
        color: '#09893E',
        textAlign: 'center',
        lineHeight: 24
    } ,
    mot: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#09893E',
        textAlign: 'center',
    }
})
