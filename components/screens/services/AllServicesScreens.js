import React, {useState} from "react";
import {SafeAreaView, Text, StyleSheet, View, ScrollView, Dimensions, Image} from "react-native";
import {Button, Card, Searchbar} from "react-native-paper";
import ServicesTab from "../../navigation/ServicesTab";
import abia from "../../../assets/abia-new.png";
import {commonStyles} from "../../constants/layout";

export default function AllServicesScreens(){
    const [searchQuery, setSearchQuery] = useState('')
    return(
        <ScrollView style={commonStyles.container}>
            <View style={{marginTop: 15}}>
                <Searchbar
                    style={commonStyles.search}
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
            <View style={{marginTop: 20, height: 400}}>
                <ServicesTab />
            </View>
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
