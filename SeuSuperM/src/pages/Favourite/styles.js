import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20,
        },

        logo:{
            height:60,
            width:120,
            alignSelf:'center',
        },
        
        background:{
            height:600,
            width:'auto'
        },

        favoriteList:{
            marginTop:20,
            alignSelf:"center"
        },

        detailsButton:{
            backgroundColor:'#F9E79F',
            borderRadius:50,
            marginBottom:10,
            height:60,
            justifyContent:'center',
            alignItems:'center',

            padding:15
        },

        favName:{
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center'
        },

        favCat:{
            fontSize:15,
            textAlign:'center'
        }
})