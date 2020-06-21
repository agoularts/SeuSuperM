import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
   },
    
    logo: {
        width:150, 
        height: 74
    }, 
 
    background: {
        width:'auto', 
        height: 600
    }, 

    input: {
        marginTop: 10,
        width:300,
        height:50,
        backgroundColor:'#fff',
        fontSize:16,
        borderRadius:8, 
        padding:10
    },

    btnLogin: {
        marginTop: 10,
        width:300,
        height:50,
        backgroundColor:'#1FDA9A',
        fontSize:16,
        borderRadius:8, 
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    txtLogin: {
        fontSize:16,
        fontWeight:'bold',
        color:"#fff"
    },

    new:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40
    },

    txtnew: {
        fontSize:16,
        color:"#000"
    },
})