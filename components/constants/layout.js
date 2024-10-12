import {Dimensions, StyleSheet} from "react-native";

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    search:{
        width: Dimensions.get('screen').width - 20,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#09893E',
        borderStyle: 'solid',
        backgroundColor: '#fff',
        borderWidth: 1
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
        paddingBottom: 5
    },
    listTitle:{
        color: "#292D32",
        // fontFamily: "DMSans_500Medium",
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
    },
    horizontalView:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
