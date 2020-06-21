import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../../services/api';
import { validaToken } from '../../services/auth';
import bgImg from '../../assets/backgroundImage.png';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function ListSymbol() {
    const [symbol, setSymbol] = useState([]);
    const [search, setSearch] = useState('');

    const navigation = useNavigation();

    function navigateToSymbol(symbol) {
        navigation.navigate('RecycleSymbol/:id',{
            params: { id: symbol },
        });
    }

    function navigateBack() {
        navigation.goBack();
    }

    
    useEffect(
        () => {
            async function fetch() {
                const token = await validaToken();
                if (!token) {
                    return navigation.navigate('Login'); //change to Login
                }
            }
            fetch()
        },
        []
    )

    let time = null
    const handleDigitado = e => {
        let texto = e
        clearTimeout(time)
        time = setTimeout(() => {
            setSearch(texto)
        }, 0.2)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const params = {};
                params.name = search;

                const retornoApi = await api.get('/searchSymbol', { headers: { auth: await AsyncStorage.getItem('userToken')}, params })
                setSymbol(retornoApi.data)
                console.log(retornoApi.data)
            } catch (err) {
                console.log(err)
                alert('Deu ruim')
            }
        }
        fetchData()
    }, [search]
    )


    return (
        <ImageBackground source={bgImg} style={styles.background}>

                <View style={styles.container}>
                    <Image source={logoImg} style={styles.logo} />

                    <TouchableOpacity onPress={() => navigateBack()} >
                        <Feather name="arrow-left" size={28} color="#E02041" />
                    </TouchableOpacity>

                    <TextInput style={styles.searchBar}
                        placeholder={'Buscar símbolos...'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(e) => handleDigitado(e)}
                    />

                    <FlatList
                        data={symbol}
                        style={styles.listSymbol}
                        keyExtractor={symbol => String(symbol.id)}
                        showsVerticalScrollIndicator={false}
                        onEndReachedThreshold={0.2}
                        renderItem={({ item: symbol }) => (
                            <TouchableOpacity style={styles.detailsButton}
                                onPress={() => navigateToSymbol(symbol.id)} >
                                <View style={styles.symbol}>
                                    <Text style={styles.symbolName}>{symbol.name}</Text>
                                    <Text style={styles.symbolCategory}>{symbol.category}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
        </ImageBackground>
    );
}