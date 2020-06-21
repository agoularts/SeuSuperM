import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';

import api from '../../services/api';
import { validaToken } from '../../services/auth';
import bgImg from '../../assets/backgroundImage.png';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function ListPacking(props) {
    const [packing, setPacking] = useState([]);
    const [search, setSearch] = useState('');

    const navigation = useNavigation();

    function navigateToPacking(packing) {
        navigation.navigate('RecyclePack/:id', {
            params: { id: packing },
        });
    }

    function navigateBack() {
        navigation.goBack();
    }

    /*
    useEffect(
        () => {
            async function fetch() {
                const token = await validaToken();
                if (!token) {
                    return navigation.navigate('Menu'); //change to Login
                }
            }
            fetch()
        },
        []
    )
*/

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

                const retornoApi = await api.get('/searchPacking', { headers: { auth: await AsyncStorage.getItem('userToken') }, params })
                setPacking(retornoApi.data)
            } catch (err) {
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
                        placeholder={'Buscar embalagens...'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(e) => handleDigitado(e)}
                    />
                        <FlatList
                            data={packing}
                            style={styles.packingList}
                            keyExtractor={pack => String(pack.id)}
                            showsVerticalScrollIndicator={false}
                            onEndReachedThreshold={0.2}
                            renderItem={({ item: pack }) => (

                                <TouchableOpacity style={styles.detailsButton}
                                    onPress={() => navigateToPacking(pack.id)} >

                                    <View style={styles.pack}>
                                        <Text style={styles.packName}>{pack.name}</Text>
                                        <Text style={styles.packCategory}>{pack.category}</Text>
                                    </View>

                                </TouchableOpacity>
                            )}
                        />
                    </View>
        </ImageBackground>
    );
}