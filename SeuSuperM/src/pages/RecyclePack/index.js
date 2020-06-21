import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import ModalRecycle from '../../components/ModalR';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import bgImg from '../../assets/backgroundImage.png'
import isopor from '../../assets/recycle/isopor.png'
import styles from './styles';

export default function RecyclePacking(props) {
    const [packing, setPacking] = useState([])
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
                const retornoApi = await api.get(`/packing/${id}`, { headers: { auth: await AsyncStorage.getItem('userToken') } })
                setPacking(retornoApi.data)

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

                    {packing.map(pack => (
                        <View key={pack.id}>
                            <View style={styles.title}>
                                <Text style={styles.name}>{pack.name}</Text>
                            </View>

                            <Image source={pack.image} alt={pack.name} />
                            <Text style={styles.description}>{pack.description}</Text>

                            <ModalRecycle
                                title={'COMO DESCARTFAR'}
                                text={pack.discard}
                            />

                            <View style={styles.curious}>
                                <Text style={styles.curiousTitle}>Curiosidades:</Text>
                                <Text style={styles.curiosity}>{pack.curiosities}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </ImageBackground >
    );
}