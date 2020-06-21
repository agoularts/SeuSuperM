import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Account from './pages/Account'
import Favourite from './pages/Favourite'
import ListPacking from './pages/ListPacking'
import ListProduct from './pages/ListProduct'
import ListRecycle from './pages/ListRecycle'
import ListSymbol from './pages/ListSymbol'
import Logon from './pages/Logon'
import Maps from './pages/Map'
import Market from './pages/Market'
import Menu from './pages/Menu'
import Options from './pages/Options'
import Product from './pages/Product'
import RecyclePack from './pages/RecyclePack'
import RecycleSymbol from './pages/RecycleSymbol'
import Register from './pages/Register'
import ResetPass from './pages/ResetPass'

const AppStack = createStackNavigator();

export function SignedOutRoutes() {
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>


                <AppStack.Screen name="Menu" component={Menu} />
                <AppStack.Screen name="Login" component={Logon} />

                <AppStack.Screen name="Product/:id" exact component={Product} />
                <AppStack.Screen name="RecyclePack/:id" exact component={RecyclePack} />
                <AppStack.Screen name="RecycleSymbol/:id" exact component={RecycleSymbol} />

                <AppStack.Screen name="ProductList" component={ListProduct} />
                <AppStack.Screen name="RecycleList" component={ListRecycle} />
                <AppStack.Screen name="PackingList" component={ListPacking} />
                <AppStack.Screen name="SymbolList" component={ListSymbol} />
                <AppStack.Screen name="Favourite" component={Favourite} />
                <AppStack.Screen name="Account" component={Account} />
                <AppStack.Screen name="Maps" component={Maps} />
                <AppStack.Screen name="Market" component={Market} />
                <AppStack.Screen name="Options" component={Options} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="ResetPassword" component={ResetPass} />


            </AppStack.Navigator>
        </NavigationContainer>
    )
}