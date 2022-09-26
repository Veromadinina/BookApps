import { View, Text,Button } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const Index = () => {
  return (
    <View>
      <Text>Mon Compte</Text>
      <Button
        title='Déconnexion'
        onPress={()=>auth()
          .signOut()
          .then(() => console.log('User signed out!'))}/>
    </View>
  )
}

export default Index