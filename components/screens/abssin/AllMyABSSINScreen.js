import React from "react";
import {ScrollView, Text, StyleSheet, View, Dimensions, Image, ImageBackground, TouchableOpacity} from "react-native";
import {Button, Card, List, ProgressBar} from "react-native-paper";
import avatar from '../../../assets/gamer.png'
import park from '../../../assets/park.jpg'
import abia from "../../../assets/abia-new.png"
import vehicle from "../../../assets/audi.jpg"
import requests from "../../../assets/icons/bill.png"
import {Colors} from "../../constants/Colors";
import {commonStyles} from "../../constants/layout";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AllMyABSSINScreen({navigation}) {
    return (
        <ScrollView style={commonStyles.container}>
            <Card style={commonStyles.card}>
                <Card.Content>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginRight: 5}}>
                            <Image style={{width: 80, height: 80, marginLeft: 'auto', marginRight: 'auto'}}
                                   source={avatar}/>
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
            <List.Subheader style={{fontWeight: '700', color: Colors.light.primary, fontSize: 16}}>My
                Actions</List.Subheader>
            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#c04848'}]}>
                    <Card.Content>
                        <Text style={{marginLeft: 10, color: '#fff'}}>Total Fines:    &#8358; 500,000</Text>
                        <View
                            style={{marginTop: 10, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text></Text>
                            <Button onPress={() => {
                            }} textColor="#000" style={{backgroundColor: '#48c048'}}>
                                Pay
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <View style={[commonStyles.horizontalView, {marginLeft: 10, marginRight: 10}]}>
                <Text style={{fontWeight: '700', color: Colors.light.secondary, fontSize: 20}}>
                    My Widgets
                </Text>
                <Text>
                    Edit
                </Text>
            </View>
            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#c04878'}]}>
                    <Card.Content>
                        <View style={commonStyles.horizontalView}>
                            <Text style={{color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 25, marginLeft: 5}}>Payments
                                Due</Text>
                            <Ionicons name="chevron-forward" onPress={() => {
                            }} size={24} style={{marginRight: 5}} color="#fff"/>
                        </View>
                        <Text style={{
                            marginLeft: 5,
                            marginTop: 10,
                            fontSize: 25,
                            lineHeight: 30,
                            fontWeight: '700',
                            color: '#fff'
                        }}>&#8358; 500,000</Text>
                        <View style={{marginTop: 5}}>
                            <ProgressBar progress={0.5} animatedValue={0.8} color="#a8c048"/>
                        </View>
                        <View
                            style={{marginTop: 40, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{
                                marginTop: 10,
                                fontSize: 16,
                                lineHeight: 25,
                                fontWeight: '700',
                                color: '#fff'
                            }}>Fines: &#8358; 500,000</Text>
                            <Button onPress={() => {
                            }} style={{backgroundColor: '#fff'}} textColor='#000'>
                                Pay
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>


            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#c23ba9'}]}>
                    <Card.Content>
                        <Card.Title title="My Wallets"
                                    titleStyle={{color: '#fff', fontSize: 20, fontWeight: '700', lineHeight: 25}}/>
                        <Text style={{marginLeft: 10, color: '#fff'}}>To get started, Kindly activate your Wallet</Text>
                        <View
                            style={{marginTop: 50, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image style={{width: 40, height: 40}} source={abia}/>
                            <Button onPress={() => {
                            }} textColor="#000" style={{backgroundColor: '#fff'}}>
                                Activate
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#742365'}]}>
                    <Card.Content>
                        <View style={commonStyles.horizontalView}>
                            <Text style={{color: '#fff', fontSize: 14, fontWeight: '700', lineHeight: 20, marginLeft: 5}}>My
                                Utilities</Text>
                            <Ionicons name="chevron-forward" onPress={() => {
                            }} size={20} style={{marginRight: 5}} color="#fff"/>
                        </View>
                        <View style={{marginTop: 40, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <Card>
                                <Card.Content>
                                    <Image style={{width: 30, height: 30}} source={abia}/>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Image style={{width: 30, height: 30}} source={abia}/>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Image style={{width: 30, height: 30}} source={abia}/>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Image style={{width: 30, height: 30}} source={abia}/>
                                </Card.Content>
                            </Card>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#742345'}]}>
                    {/*<ImageBackground source={park} resizeMode='cover' style={{*/}
                    {/*   justifyContent: 'center',*/}
                    {/*    opacity: 0.8*/}
                    {/*}}>*/}
                    <Card.Content>
                        <View style={commonStyles.horizontalView}>
                            <Text
                                style={{color: '#fff', fontSize: 18, fontWeight: '700', lineHeight: 24, marginLeft: 5}}>Pay
                                for Parking</Text>
                            <Ionicons name="chevron-forward" onPress={() => {
                            }} size={20} style={{marginRight: 5}} color="#fff"/>
                        </View>
                        <View style={{
                            marginTop: 70,
                            marginLeft: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Image style={{width: 40, height: 40}} source={abia}/>
                            <Button onPress={() => {
                            }} textColor="#000" style={{backgroundColor: '#fff'}}>
                                Pay
                            </Button>
                        </View>
                    </Card.Content>
                    {/*</ImageBackground>*/}
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Vehicle')}>
                <Card style={[commonStyles.menuCard]}>
                    <ImageBackground source={park} resizeMode='cover' style={{
                        justifyContent: 'center',
                        borderRadius: 5,
                        opacity: 0.8
                    }}>
                        <Card.Content>
                            <View style={commonStyles.horizontalView}>
                                <Text
                                    style={{color: '#FFFFFF', fontSize: 18, fontWeight: '900', lineHeight: 24, marginLeft: 5, marginTop: 10}}>
                                    My Vehicles & Plates
                                </Text>
                                <Ionicons name="chevron-forward" onPress={() => {
                                }} size={20} style={{marginRight: 5, marginTop: 12}} color="#fff"/>
                            </View>
                            <Text style={{marginLeft: 5, marginTop: 5, color: '#fff', fontSize: 12,}}>You can View and Manage your Driving licence here</Text>
                            <View
                                style={{marginTop: 50, marginLeft: 10, paddingBottom: 10}}>
                                <Text style={{
                                    marginTop: 10,
                                    fontSize: 16,
                                    lineHeight: 25,
                                    fontWeight: '700',
                                    color: '#fff'
                                }}>Payable Fines(1)</Text>
                                <Text style={{
                                    marginTop: 10,
                                    fontSize: 16,
                                    lineHeight: 25,
                                    fontWeight: '700',
                                    color: '#fff'
                                }}>Fines: &#8358; 500,000</Text>
                            </View>
                        </Card.Content>
                    </ImageBackground>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity>
                <Card style={[commonStyles.menuCard, {backgroundColor: '#393040'}]}>
                    <Card.Content>
                        <View style={commonStyles.horizontalView}>
                            <Text
                                style={{color: '#FFFFFF', fontSize: 18, fontWeight: '900', lineHeight: 24, marginLeft: 5, marginTop: 10}}>
                                My Requests
                            </Text>
                            <Ionicons name="chevron-forward" onPress={() => {
                            }} size={20} style={{marginRight: 5, marginTop: 12}} color="#fff"/>
                        </View>
                        <Text style={{marginLeft: 5, color: '#fff', fontSize: 12}}>To get started, Kindly activate your Wallet</Text>
                        <View
                            style={{marginTop: 50, marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Image style={{width: 40, height: 40}} source={requests}/>
                            <Button onPress={() => {
                            }} textColor="#fff" style={{backgroundColor: 'transparent', borderColor: '#E7E7E7', borderWidth: 2}}>
                                View History
                            </Button>
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({})
