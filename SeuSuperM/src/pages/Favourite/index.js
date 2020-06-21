import React, { useState, useEffect } from 'react'
import { View, ScrollView, FlatList, Image, Text, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import bgImg from '../../assets/backgroundImage.png';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Favourite() {
    const [favorite, setFavorite] = useState([])
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState([]);
    const navigation = useNavigation()

    async function navigateBack() {
        navigation.goBack()
    }

    function navigateToFave(fave) {
        navigation.navigate('Product/:id', {
            params: { id: fave },
        });
    }

    async function loadFavorite() {
        if (loading) {
            return;
        }

        if (total > 0 && favorite.length != total) {
            return;
        }

        setLoading(true);

        const id = await AsyncStorage.getItem('userID')
        const retornoApi = await api.get(`favorite/${id}`, {
            params: { page }
        });
        setFavorite(retornoApi.data)
        setTotal(retornoApi.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadFavorite();
    }, []);



    return (
        <ImageBackground source={bgImg} style={styles.background}>

            <View style={styles.container}>
                <Image source={logoImg} style={styles.logo} />

                <TouchableOpacity styles={styles.back} onPress={() => navigateBack()} >
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>


                <FlatList
                    data={favorite}
                    style={styles.favoriteList}
                    keyExtractor={fav => String(fav.id)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadFavorite}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: fav }) => (

                        <TouchableOpacity style={styles.detailsButton}
                           // onPress={() => navigateToFave(fav.product_id)} 
                           >

                            <View style={styles.fav}>
                                <Text style={styles.favName}>{fav.name}</Text>
                                <Text style={styles.favCat}>{fav.category}</Text>
                            </View>

                        </TouchableOpacity>
                    )}
                />
            </View>
        </ImageBackground>
    );
}