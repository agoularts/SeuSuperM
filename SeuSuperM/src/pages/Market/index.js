import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

import api from '../../services/api';
import { validaToken } from '../../services/auth';
import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/backgroundImage.png';
import styles from './styles';

export default function Market() {
    const [market, setMarket] = useState([]);
    const [total, setTotal] = useState([]);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToMap() {
        navigation.navigate('Map');
    }

    function navigateBack() {
        navigation.goBack();
    }

    async function loadMarket() {
        if (loading) {
            return;
        }

        if (total > 0 && market.length != total) {
            return;
        }

        setLoading(true);

        const response = await api.get('market', {
            params: { page }
        });

        setMarket(response.data);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadMarket();
    }, []);

    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg} style={styles.logo}/>
                    
                    <TouchableOpacity onPress={() => navigateBack()}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
                </View>

                <Text style={styles.title}>Mercados</Text>
                <FlatList
                    data={market}
                    style={styles.marketList}
                    keyExtractor={market => String(market.id)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadMarket}
                    onEndReachedThreshold={0.2}
                    renderItem={({ item: market }) => (
                        <View style={styles.market}>
                            <Text style={styles.marketProperty}>MERCADO</Text>
                            <Text style={styles.marketValue}>{market.name}</Text>

                            <Text style={styles.marketProperty}>ENDEREÇO</Text>
                            <Text style={styles.marketValue}>{market.address}{"\n"}
                            {market.city} - {market.uf}</Text>

                            <Text style={styles.marketProperty}>TELEFONE</Text>
                            <Text style={styles.marketValue}>{market.phone}</Text>

                            <Text style={styles.marketProperty}>SERVIÇOS OFERECIDOS</Text>
                            <Text style={styles.marketValue}>{market.services}</Text>

                            <TouchableOpacity
                                style={styles.detailsButton}
                            onPress={() => navigateToMap()}>
                                <Text style={styles.detailsButtonText}>Ver no Mapa</Text>
                                <Feather name="arrow-right" size={16} color="#E02041" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </ImageBackground>
    );
}