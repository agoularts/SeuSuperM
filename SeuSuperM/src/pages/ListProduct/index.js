import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground, TextInput, AsyncStorage } from 'react-native';

import api from '../../services/api';
import { validaToken } from '../../services/auth';
import bgImg from '../../assets/backgroundImage.png'
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function ListProduct() {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState('');

    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToProduct(product) {
        navigation.navigate('Product/:id', {
            params: { id: product},
        });
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
            async function fetch() {
                try {
                    const params = {};
                        params.name = search;
    
                    const retornoApi = await api.get('searchProduct', { headers: { auth: await AsyncStorage.getItem('userToken')}, params })
                        setProduct(retornoApi.data)
                } catch(err) {
                    alert('Deu ruim')
                }
            } fetch()
        }, [search] )
    



    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <View style={styles.container}>
                <Image source={logoImg} style={styles.logo} />

                <TouchableOpacity onPress={() => navigateBack()} >
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>

                <TextInput 
                    style={styles.searchBar}
                    placeholder={'Buscar produto'}
                    placeholderTextColor={'#fff'}
                    onChangeText={(e) => handleDigitado(e)}
                />

                <FlatList
                    data={product}
                    style={styles.productList}
                    keyExtractor={prod => String(prod.id)}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: prod }) => (

                        <TouchableOpacity style={styles.detailsButton}
                            onPress={() => navigateToProduct(prod.id)} >

                            <View style={styles.product}>
                                <Text style={styles.prodName}>{prod.name}</Text>
                                <Text style={styles.prodCat}>{prod.category}</Text>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    );
}