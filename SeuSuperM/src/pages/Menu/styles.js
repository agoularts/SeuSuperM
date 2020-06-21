import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        paddingHorizontal: 31,
        paddingTop: Constants.statusBarHeight + 20,
    }, 

    logo:{
        height:60,
        width:120,
        alignSelf:'center',
        marginBottom:40
    },

    background:{
        height:600,
        width:360
    },

    menu:{
        flexDirection:'column', 
        justifyContent:'space-between',
    },

    menumkt:{
        flexDirection:'row',
        height:50,
        width:300,
        borderRadius:35,
        backgroundColor:'#D7BDE2',
        marginBottom:10,
        paddingTop:10
    },

    menumap:{
        flexDirection:'row',
        height:50,
        width:300,
        borderRadius:35,
        backgroundColor:'#AED6F1',
        marginBottom:10,
        paddingTop:10
    },

    menuprd:{
        flexDirection:'row',
        height:50,
        width:300,
        borderRadius:35,
        backgroundColor:'#F5B7B1',
        marginBottom:10,
        paddingTop:10
    },

 
    menurec:{
        flexDirection:'row',
        height:50,
        width:300,
        borderRadius:35,
        backgroundColor:'#A3E4D7',
        marginBottom:10,
        paddingTop:10
    },

 
    menufav:{
        flexDirection:'row',
        height:50,
        width:300,
        borderRadius:35,
        backgroundColor:'#F9E79F',
        marginBottom:10,
        paddingTop:10
    },

 
    textbtn:{
        height:60,
        textAlign:'center',
        color:'#5D6D7E',
        fontSize:20,
        fontWeight:'bold',
    },

    additional:{
        marginTop:20,
        flexDirection:'row', 
        justifyContent:'space-between',
    },

    addbtn:{
        flexDirection:'row',
        height:50,
        width:130,
        borderRadius:15,
        backgroundColor:'#F5CBA7',
        marginBottom:15,
         
    },

    textadd:{
        textAlign:'center',
        color:'#5D6D7E',
        fontSize:18,
        fontWeight:'bold',
        paddingTop:12,
    },

    icon:{
        paddingHorizontal: 40
    },

    iconAdd:{
        paddingHorizontal:45,
        alignSelf:'center',
    }
})