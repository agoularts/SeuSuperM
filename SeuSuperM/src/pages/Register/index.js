import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles';

import bgImg from '../../assets/backgroundImage.png'
import logoImg from '../../assets/logo.png';
import { TextInput } from 'react-native-gesture-handler';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function handleRegister() {

        const data = {
            name,
            email,
            password,
        };

        if (name === '' || email === '' || password === '') {
            alert('Preencha os campos com valores válidos.');
        } else {
            try {
                const response = await api.post('user', data);
                navigation.navigate('Login');
                alert(`Bem vindo, ${response.data.name}!`);

            } catch (err) {
                alert('Erro no cadastro, tente novamente.');
            }
        }
    }

    async function navigateBack() {
        navigation.goBack()
    }

    return (
        <ImageBackground source={bgImg} style={styles.background}>
            <View style={styles.container}>

                <Image source={logoImg} style={styles.logo} />

                <TouchableOpacity style={styles.back} onPress={() => navigateBack()}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>

                <Text style={styles.title}>Cadastro</Text>

                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#999"
                        autoCapitalize='words'
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <TextInput style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        secureTextEntry
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity onPress={handleRegister} type="submit" style={styles.btnCadastrar}>
                        <Text style={styles.txtCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}