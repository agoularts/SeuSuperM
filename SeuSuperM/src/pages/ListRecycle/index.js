import React from 'react'
import { View, ScrollView, Image, Text, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import bgImg from '../../assets/backgroundImage.png';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function ListRecycle() {
    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    function gotoPacking() {
        navigation.navigate('PackingList');
    }

    function gotoSymbol() {
        navigation.navigate('SymbolList');
    }

    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <ScrollView>

                <View style={styles.container}>
                    <Image source={logoImg} style={styles.logo} />

                    <TouchableOpacity styles={styles.back} onPress={() => navigateBack()} >
                        <Feather name="arrow-left" size={28} color="#E02041" />
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => gotoPacking()}>
                            <Text style={styles.text}>Embalagens</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => gotoSymbol()}>
                            <Text style={styles.text}>Símbolos</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}