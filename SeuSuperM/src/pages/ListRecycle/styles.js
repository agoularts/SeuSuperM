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

    button:{
        marginTop:50,
        height:60,
        width:300,
        borderRadius:35,
        backgroundColor:'#A3E4D7',
        marginBottom:10,
        padding:15
    },

    text:{
        height:60,
        textAlign:'center',
        color:'#5D6D7E',
        fontSize:20,
        fontWeight:'bold',
    }

})