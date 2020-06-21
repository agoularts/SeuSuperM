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

    title: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#F5B7B1',
        borderRadius: 50,
        paddingHorizontal: 10,
        alignItems: 'center',
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    category: {
        fontSize: 15,
    },

    brand: {
        fontSize: 15
    },

    imgDesc: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 10
    },

    image: {
        width: 100,
        height: 100,
        justifyContent: 'center'
    },

    description: {
        width: 200,
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20,
        padding: 10
    },

    infoTips: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 15
    },

    favorite: {
        padding: 5
    },

    table: {
        backgroundColor: '#F9FBBA',
        borderRadius: 20,
        padding: 10
    },

    nutrition: {
        fontWeight: 'bold'
    },

    curious: {
        marginTop: 20,
        marginBottom: 40,
        backgroundColor: '#F5B7B1',
        borderRadius: 20,
        padding: 10,
        width: 300,
        height: 'auto'
    },

    curiosity: {
        fontSize: 15
    }

})