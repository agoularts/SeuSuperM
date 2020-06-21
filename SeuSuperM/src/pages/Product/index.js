import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, View, Image, Text, ImageBackground, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import ModalProduct from '../../components/Modal';
import { MaterialIcons } from '@expo/vector-icons';

import { validaToken } from '../../services/auth';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import batataInglesa from '../../assets/product/batataInglesa.png';
import adesOriginal from '../../assets/product/adesOriginal.png';
import alfaceCrespa from '../../assets/product/alfaceCrespa.png';
import bananaTerra from '../../assets/product/bananaTerra.png';
import catchup from '../../assets/product/catchup.png';
import chocoCaju from '../../assets/product/chocoCaju.png';
import cocaCola from '../../assets/product/cocaCola.png';
import lentilha from '../../assets/product/lentilha.png';
import milhoLata from '../../assets/product/milhoLata.png';
import snowFlakesCereal from '../../assets/product/snowFlakesCereal.png';
import bgImg from '../../assets/backgroundImage.png';

import styles from './styles';

export default function Product(props) {
    const [product, setProduct] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    //lista as propriedades do produto
    useEffect(() => {
        async function fetchData() {
            const token = await validaToken();
            if (!token) {
                return navigation.navigate('Login');
            }

            try {
                const id = props.route.params.params.id
                const retornoApi = await api.get(`/product/${id}`, { headers: { auth: await AsyncStorage.getItem('userToken') } })
                setProduct(retornoApi.data)

                const params = {
                    id_usuario: await AsyncStorage.getItem('userID'),
                    id_product: props.route.params.params.id
                }

                const retornoApiFav = await api.get('/favoriteUser', { params })

                if (retornoApiFav.data.length > 0)
                    setIsFavorite(true)

            } catch (error) {
                console.log(error)
                alert('Erro ao consultar a API')
            }
        }
        fetchData()
    },
        [props.route.params.params.id]
    )

    async function favoriteOnClick(product) {
        if (isFavorite) {
            handleDeleteFavorite(product)
        } else {
            handleNewFavorite(product)
        }
    }

    async function handleNewFavorite(product) {

        if (!isFavorite) {

            const data = {
                product_id: product,
                user_id: user
            };

            try {

                const response = await api.post('favorite', data);
                setIsFavorite(true)

            } catch (err) {
                alert('Erro ao adicionar favorito, tente novamente.');
            }
        }
    }

    async function handleDeleteFavorite(id) {
        try {
            await api.delete(`favorite/${id}`, {
                headers: {
                    auth: await AsyncStorage.userToken,
                }
            });

            setIsFavorite(false)

        } catch (err) {
            alert('Erro ao deletar o caso, tente novamente')
        }
    }



    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={logoImg} style={styles.logo} />

                    <TouchableOpacity onPress={() => navigateBack()} >
                        <Feather name="arrow-left" size={28} color="#E02041" />
                    </TouchableOpacity>

                    {product.map(prod => (
                        <View key={prod.id}>
                            <View style={styles.title}>
                                <Text style={styles.name}>{prod.name}</Text>
                                <TouchableOpacity onPress={() => favoriteOnClick(prod.id)}>
                                    {
                                        isFavorite ? <MaterialIcons name="favorite" size={24} color="black" /> : <MaterialIcons name="favorite-border" size={24} color="black" />
                                    }
                                </TouchableOpacity>
                                <Text style={styles.category}>{prod.category}</Text>
                                <Text style={styles.brand}>{prod.brand}</Text>
                            </View>

                            <View style={styles.imgDesc} key={prod.id} >
                                <Image source={{ uri: prod.img }} style={styles.image} />
                                <Text style={styles.description}>{prod.description}{"\n"}{prod.specification}</Text>
                            </View>


                            <View style={styles.infoTips} >
                                <View style={styles.howto}>
                                    <ModalProduct
                                        title={'COMO COMPRAR'}
                                        text={prod.howToBuy}
                                    />

                                    <ModalProduct
                                        title={'COMO PREPARAR'}
                                        text={prod.howToPrepare}
                                    />

                                    <ModalProduct
                                        title={'COMO ARMAZENAR'}
                                        text={prod.howToStore}
                                    />

                                    <ModalProduct
                                        title={'COMO DESCARTAR'}
                                        text={prod.howToDiscard}
                                    />
                                </View>

                                <View style={styles.table}>
                                    <View style={styles.info}>
                                        <Text style={styles.nutrition}>Informação Nutricional</Text>
                                        <Text>Porção de {prod.portion}g</Text>
                                        <Text>Valor nutricional: {prod.calories} Kcal</Text>
                                        <Text>Carboídratos: {prod.carbohidrate}g</Text>
                                        <Text>Proteínas: {prod.protein}g</Text>
                                        <Text>Gorduras Totais: {prod.totalFat}g</Text>
                                        <Text>Gordura Saturada: {prod.saturatedFat}g</Text>
                                        <Text>Gordura Trans: {prod.transFat}g</Text>
                                        <Text>Colesterol: {prod.cholesterol}</Text>
                                        <Text>Fibra alimentar: {prod.dietaryFiber}g</Text>
                                        <Text>Sódio: {prod.sodium}mg</Text>
                                        <Text>Vitaminas: {prod.vitamins}</Text>
                                        <Text>Cálcio: {prod.calcium}</Text>
                                        <Text>Vitamina B1: {prod.vitB1}</Text>
                                        <Text>Vitamina B2: {prod.vitB2}</Text>
                                        <Text>Gordura{"\n"}Monoinsaturada: {prod.monoinsaturatedFat}</Text>
                                        <Text>Vitamina B6: {prod.vitB6}</Text>
                                        <Text>Ferro: {prod.iron}</Text>
                                        <Text>Niacina: {prod.niacin}</Text>
                                        <Text>Ácido Pantotênico: {prod.pantothenicAcid}</Text>
                                        <Text>Ácido Fólico: {prod.folicAcid}</Text>
                                        <Text>Açúcares: {prod.sugar}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.curious} >
                                <Text style={styles.curiosity}>{prod.curiosities}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}