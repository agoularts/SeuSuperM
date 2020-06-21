import { StyleSheet } from 'react-native'
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
    input: {
        marginTop: 10,
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        fontSize: 16,
        borderRadius: 8,
        padding: 10
    },

    btnCadastrar: {
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

    txtCadastrar: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff"
    },

    new: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40
    },

    txtnew: {
        fontSize: 16,
        color: "#000"
    },

    back:{
        flexDirection:'row',
    },
    
    backtxt:{
        fontSize:16
    },

    title:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        paddingTop:20,
        paddingBottom:10
    },
})