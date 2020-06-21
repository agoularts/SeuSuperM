import React, { useState, useEffect } from 'react';
import {
  View, AsyncStorage, KeyboardAvoidingView, Image,
  Text, TextInput, TouchableOpacity, ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles';
import logo from '../../assets/logo.png';
import bgImg from '../../assets/backgroundImage.png'

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Menu');
      }
    })
  }, []);

  async function handleLogin() {

    try {
      const response = await api.post('sessions', { email, password });

      await AsyncStorage.setItem('userEmail', email);
       await AsyncStorage.setItem('userName', response.data.name);
       await AsyncStorage.setItem('userID', response.data.id);
       await AsyncStorage.setItem('userToken', response.data.token);

      navigation.navigate('Menu');

    } catch (err) {
      alert('Falha no login, tente novamente.');

    }
  }


  async function gotoRegister() {
    navigation.navigate('Register')
  }

  return (
    <ImageBackground source={bgImg} style={styles.background}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.form}>
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

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            autoCapitalize="none"
            secureTextEntry
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
            <Text style={styles.txtLogin}>Entrar</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.new} onPress={() => gotoRegister()}>
            <MaterialCommunityIcons name="account-plus" size={24} color="black" />
            <Text style={styles.txtnew}>   Não tenho Cadastro</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

