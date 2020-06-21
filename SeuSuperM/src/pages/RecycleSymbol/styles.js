import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    logo: {
        height: 60,
        width: 120,
        alignSelf: 'center',
    },

    background: {
        height: 600,
        width: 360
    },

    searchBar: {
        backgroundColor: "#ccd1d1",
        height: 40,
        borderRadius: 10,
        padding: 10
    },


    title: {
        marginTop: 20,
        marginBottom: 20,
        height: 50,
        backgroundColor: '#A3E4D7',
        borderRadius: 50,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    imgDesc:{
        alignItems:'center'
    },

    description: {
        width: 'auto',
        height:'auto',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        paddingLeft:10,
        fontSize: 15,
        paddingRight:10,
    },

    image: {
        width: 100,
        height: 100,
    },

    infoTips: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    characts: {
        marginTop: 10
    },

    charTitle: {
        fontSize: 18
    },

    charText: {
        fontSize: 15
    },

    curious: {
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#A3E4D7',
        borderRadius: 20,
        padding: 10,
        width: 300,
        height: 'auto'
    },

    curiousTitle: {
        fontSize: 20,
        fontWeight:'bold'
    },
    
    curiosity: {
        fontSize: 15
    }
})