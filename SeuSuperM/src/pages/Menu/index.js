import React from 'react';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ImageBackground, TouchableOpacity,AsyncStorage } from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/backgroundImage.png'
import styles from './styles';


export default function Menu() {
    const navigation = useNavigation();

    //REDIRECIONA MENU
    function gotoMarket() {
        navigation.navigate('Market');
    }

    function gotoMaps() {
        navigation.navigate('Maps');
    }

    function gotoRecycle() {
        navigation.navigate('RecycleList');
    }

    function gotoProduct() {
        navigation.navigate('ProductList');
    }

    function gotoFavorites() {
        navigation.navigate('Favourite');
    }

    function gotoAccount() {
        navigation.navigate('Account');
    }

    function gotoOptions() {
        navigation.navigate('Options');
    }

    return (
        <ImageBackground source={bgImg} style={styles.background} >
            <View style={styles.container}>
                <Image source={logoImg} style={styles.logo} />


                <View style={styles.menu}>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.menumkt} onPress={() => gotoMarket()}>
                            <MaterialIcons name="shopping-cart" size={28} color="#5D6D7E" style={styles.icon} />
                            <Text style={styles.textbtn}>Mercados</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.menumap}
                            onPress={() => gotoMaps()}>
                            <MaterialIcons name="map" size={28} color="#5D6D7E" style={styles.icon} />
                            <Text style={styles.textbtn}>Mapa</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.menu}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.menuprd}
                            onPress={() => gotoProduct()}>
                            <MaterialCommunityIcons name="food-apple" size={28} color="#5D6D7E" style={styles.icon} />
                            <Text style={styles.textbtn}>Produtos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.menu}>
                        <View style={styles.button}>
                            <TouchableOpacity style={styles.menurec}
                                onPress={() => gotoRecycle()}>
                            <MaterialCommunityIcons name="recycle" size={28} color="#5D6D7E" style={styles.icon} />
                                <Text style={styles.textbtn}>Reciclagem</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity style={styles.menufav}
                                onPress={() => gotoFavorites()}>
                            <MaterialIcons name="favorite" size={28} color="#5D6D7E" style={styles.icon} />
                                <Text style={styles.textbtn}>Favoritos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.additional}>
                        <View style={styles.account}>
                            <TouchableOpacity style={styles.addbtn}
                                onPress={() => gotoAccount()}>
                            <MaterialIcons name="account-circle" size={40} color="#5D6D7E" style={styles.iconAdd} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.options}>
                            <TouchableOpacity style={styles.addbtn}
                                onPress={() => gotoOptions()}>
                            <MaterialIcons name="settings" size={40} color="#5D6D7E" style={styles.iconAdd} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
