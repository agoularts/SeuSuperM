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
        width: 'auto'
    },

    listSymbol: {
        marginTop: 20,
    },

    searchBar:{
        backgroundColor:"#ccd1d1",
        height:40,
        borderRadius: 10,
        padding:10
    },
    
    detailsButton: {
        backgroundColor: '#A3E4D7',
        borderRadius: 50,
        marginBottom: 10,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',

        padding: 15
    },

    symbolName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    symbolCategory: {
        fontSize: 15,
        textAlign: 'center'
    },
})