import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    logo:{
        paddingHorizontal:0,
        height:60,
        width:120,
        alignSelf:'center',
        marginBottom:15
    },

    background:{
        height:600,
        width:380
    },
    
    title: {
        fontSize: 25,
        marginBottom: 16,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign:'center'
    },

    marketList: {
        marginTop: 20,
        width:315,
    },

    market: {
        padding:24, 
        borderRadius: 8, 
        backgroundColor: '#FFF',
        marginBottom:30,
    },

    marketProperty: {
        fontSize:14, 
        color: '#41414d',
        fontWeight: 'bold',
    },

    marketValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    detailsButton: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold',
    },

})