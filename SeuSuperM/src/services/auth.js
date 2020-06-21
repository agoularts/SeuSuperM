import { AsyncStorage } from 'react-native'
import api from '../services/api';

export const autenticado = async () => {

    let token = await AsyncStorage.getItem('userToken')
    if(token){
        return true
    } else {
        return false   
    }
}

export const validaToken = async () => {
    try {
        let token = await AsyncStorage.getItem('userToken')
        if(!token) {
            return false
        }

        const result = await api.get('/config/validaToken', { headers: { auth: await AsyncStorage.getItem('userToken') } });
        
        if(!result.data.success) {
            await AsyncStorage.removeItem('userToken')
            await AsyncStorage.removeItem('userName')
            await AsyncStorage.removeItem('userEmail')  
        }

        return true

    } catch (error) {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('userName')
        await AsyncStorage.removeItem('userEmail')
    }
}

export const logout = async () => {
    await AsyncStorage.removeItem('userToken')
    await AsyncStorage.removeItem('userName')
    await AsyncStorage.removeItem('userEmail')
}
