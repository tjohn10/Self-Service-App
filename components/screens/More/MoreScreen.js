import React, {useContext, useState} from "react";
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {AuthContext} from "../../../context/AuthContext";
import {Card, Divider, Searchbar, List} from "react-native-paper";
import {commonStyles} from "../../constants/layout";
import Ionicons from "react-native-vector-icons/Ionicons";
import chatbot from '../../../assets/icons/robot.png'
import location from '../../../assets/icons/geographic.png'
import agent from '../../../assets/icons/helpline.png'


export default function MoreScreen() {
    const [searchText, setSearchText] = useState('')
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    const {logout} = useContext(AuthContext)
    const otherSupport = [
        {
            name: 'Request Support',
            icon: agent
        },
        {
            name: 'Take a Photo and Report',
            icon: agent
        },
        {
            name: 'Report a Bug',
            icon: agent
        },
        {
            name: 'Request Support',
            icon: agent
        },
    ]
    const FAQs = [
        {
            title: 'Introduction',
            description: 'Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.'
        },
        {
            title: 'Introduction',
            description: 'Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.'
        },
        {
            title: 'Introduction',
            description: 'Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.'
        },
        {
            title: 'Introduction',
            description: 'Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.'
        },
        {
            title: 'Introduction',
            description: 'Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.'
        },

    ]
    return (
        <ScrollView style={commonStyles.container}>
            <View style={{marginTop: 15}}>
                <Searchbar
                    style={commonStyles.search}
                    placeholder="Search"
                    onChangeText={setSearchText}
                    value={searchText}
                />
            </View>
            <View style={{marginTop: 30}}>
                <Text style={[styles.agentsText,{marginLeft: 10}]}>Talk to Our Agents</Text>
                <View style={[commonStyles.horizontalView, {marginTop: 20}]}>
                    <Card style={{width: 150, marginLeft: 20}}>
                        <Card.Content>
                            <View style={{flexDirection: 'row'}}>
                                <Image style={{width: 40, height: 40}} source={chatbot}/>
                                <Text style={styles.miniCardText}>ABIAPAY Chatbot</Text>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={{width: 150, marginLeft: 10, marginRight: 20}}>
                        <Card.Content>
                            <View style={{flexDirection: 'row', paddingTop: 10}}>
                                <Image style={{width: 24, height: 24}} source={agent}/>
                                <Text style={styles.miniCardText}>Live Chatbot</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View
                style={{marginTop: 30, marginLeft: 20, marginRight: 20, paddingBottom: 20, backgroundColor: '#E7E7E7'}}>
                <Text style={styles.agentsText}>Other Support Channels</Text>
                <FlatList
                    data={otherSupport}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <Card style={styles.supportCards} key={index}>
                            <Card.Content style={{flexDirection: 'row'}}>
                                <Image style={{width: 30, height: 30}} source={item.icon}/>
                                <Text style={styles.nameText}>{item.name}</Text>
                            </Card.Content>
                        </Card>
                    )}

                />


            </View>
            <View style={[commonStyles.horizontalView, {margin: 10, marginRight: 20}]}>
                <Text style={styles.agentsText}>FAQ</Text>
                <Text style={styles.seeText}>See All</Text>
            </View>
            <View>
                <FlatList
                    data={FAQs}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({item, index}) => (
                        <View>
                            <List.Accordion
                                expanded={expanded}
                                onPress={handlePress}
                                style={commonStyles.list}
                                title={item.title}
                                titleStyle={{
                                    fontWeight: '700',
                                    fontSize: 18, lineHeight: 25
                                }}
                                right={props => <List.Icon {...props} icon="chevron-right"/>}>
                                <List.Item title="" description={item.description}/>
                            </List.Accordion>
                            <Divider style={{margin: 10}}/>
                        </View>

                    )}

                />
            </View>
            <View style={{marginTop: 20}}>
                <Card style={commonStyles.card}>
                    <Image style={{width: 80, height: 80, marginLeft: 'auto', marginRight: 'auto', marginTop: 10}} source={location}/>
                    <Text style={styles.searchText}>
                        Search For the Nearest Self Service Center
                    </Text>
                </Card>

            </View>
            <Text style={styles.logoutText} onPress={() => logout()}>Logout</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    logoutText: {
        fontWeight: '600',
        fontSize: 18,
        textAlign: 'center',
         marginBottom: 20
    },
    agentsText: {
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 30,
        marginLeft: 10,
        marginTop: 10
    },
    miniCardText: {
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 5,
    },
    nameText: {
        fontWeight: '500',
        fontSize: 16,
        width: 100,
        marginLeft: 5
    },
    supportCards: {
        width: (Dimensions.get('screen').width - 70) / 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10
    },
    seeText: {
        paddingTop: 10,
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'right'
    },
    searchText: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 18,
        width: 200,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: '700',
        lineHeight: 25
    }
})

