import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
//Page crée
import Connexion from './Connexion'
import Inscription from './Inscription'

const Stack = createNativeStackNavigator();


const Public = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen name= 'Connexion' component={Connexion} options={{headerShown:false}}/>
        <Stack.Screen name= 'Inscription' component={Inscription} options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

export default Public