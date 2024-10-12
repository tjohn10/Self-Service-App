import React from "react";
import {ScrollView, Text, StyleSheet, View, Dimensions, Image} from "react-native";
import {Button, Card, List} from "react-native-paper";
import avatar from '../../../assets/gamer.png'
import vehicle from '../../../assets/icons/vehicle-insurance.png'
import abia from "../../../assets/abia-new.png"
import {Colors} from "../../constants/Colors";
import {commonStyles} from "../../constants/layout";
export default function AllMyABSSINScreen({navigation}){
    return(
        <ScrollView style={commonStyles.container}>
            <Card style={commonStyles.card}>
                <Card.Content>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 5}}>
                            <Image style={{width: 80, height: 80, marginLeft: 'auto', marginRight: 'auto'}} source={avatar} />
                        </View>
                        <View>
                            <View style={commonStyles.horizontalView}>
                                <Text style={commonStyles.title}>Name:</Text>
                                <Text style={commonStyles.subText}>John Doe</Text>
                            </View>
                            <View style={commonStyles.horizontalView}>
                                <Text style={commonStyles.title}>Phone:</Text>
                                <Text style={commonStyles.subText}>09012345678</Text>
                            </View>
                            <View style={commonStyles.horizontalView}>
                                <Text style={commonStyles.title}>ABSSIN: </Text>
                                <Text style={commonStyles.subText}>1122334455</Text>
                            </View>
                            <View style={commonStyles.horizontalView}>
                                <Text style={commonStyles.title}>Address: </Text>
                                <Text style={commonStyles.subText}> 123 Address way, Abia State</Text>
                            </View>
                        </View>

                    </View>
                </Card.Content>
            </Card>
            <View style={{marginLeft: 10, marginRight: 10}}>
                <List.Section>
                    <List.Subheader style={{fontWeight: '700', color: Colors.light.primary, fontSize: 16}}>My Actions</List.Subheader>
                    <List.Item
                        style={commonStyles.list}
                        titleStyle={commonStyles.listTitle}
                        title="Vehicle Registration"
                        onPress={() => navigation.navigate('Vehicle')}
                        left={() => <Image style={{height: 30, width: 30}} source={vehicle}/> }
                        right={() => <List.Icon icon="chevron-right" />}
                    />
                    <List.Item
                        style={commonStyles.list}
                        titleStyle={commonStyles.listTitle}
                        title="Receipts"
                        left={() => <List.Icon icon="folder" />}
                        right={() => <List.Icon icon="chevron-right" />}
                    />
                </List.Section>
            </View>
            <Card style={[commonStyles.menuCard, {backgroundColor: '#fff'}]}>
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
            <Card style={[commonStyles.menuCard, {backgroundColor: '#fff'}]}>
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


})
