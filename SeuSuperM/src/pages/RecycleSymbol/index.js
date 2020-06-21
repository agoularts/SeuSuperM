import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

import api from '../../services/api';
import ModalRecycle from '../../components/ModalR';

import logoImg from '../../assets/logo.png';
import transgenico from '../../assets/recycle/transgenico.png'
import bgImg from '../../assets/backgroundImage.png'
import styles from './styles';

export default function RecycleSymbol(props) {
    const [symbol, setSymbol] = useState([])
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchData() {
           const token = await validaToken();
                        if (!token) {
                            return navigation.navigate('Login');
                        }

            try {
                const id = props.route.params.params.id
                const retornoApi = await api.get(`/symbol/${id}`, { headers: { auth: await AsyncStorage.getItem('userToken')}})
                setSymbol(retornoApi.data)

            } catch (error) {
                console.log('erroAPI: ', error)
                alert('Erro ao consultar a API')
            }
        }
        fetchData()
    },
        [props.route.params.params.id]
    )

    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={logoImg} style={styles.logo} />

                    <TouchableOpacity onPress={() => navigateBack()} >
                        <Feather name="arrow-left" size={28} color="#E02041" />
                    </TouchableOpacity>

                    {symbol.map(symb => (
                        <View key={symb.id}>
                            <View style={styles.title}>
                                <Text style={styles.name}>{symb.name}</Text>
                            </View>

                            <View style={styles.imgDesc}>
                                <Image source={symb.image} alt='transgênico' />
                                <Text style={styles.description}>{symb.description}</Text>
                            </View>

                            <ModalRecycle
                                title={'VANTAGENS'}
                                text={symb.advantages}
                            />

                            <ModalRecycle
                                title={'DESVANTAGENS'}
                                text={symb.disadvantages}
                            />

                            <View style={styles.curious}>
                                <Text style={styles.curiousTitle}>Curiosidades:</Text>
                                <Text style={styles.curiosity}>{symb.curiosities}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

