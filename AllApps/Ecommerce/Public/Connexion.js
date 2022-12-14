import { View, Text } from 'react-native'
import React, { useState, useContext }from 'react'
import { useNavigation } from '@react-navigation/native'

import Firebase from '../../../FirebaseContext/firebase';
import auth from '@react-native-firebase/auth';

import { Button, Input } from '@rneui/themed';


import Icone from 'react-native-vector-icons/Feather'
import Icona from 'react-native-vector-icons/Octicons'
import Icono from 'react-native-vector-icons/MaterialIcons'

const Connexion = () => {

      const navigation = useNavigation();

       // modifier mon état de visibilité du mot de passe
  const [affMotDePasse, setaffMotDePasse] = useState(true);

  const [email, setEmail] = useState();
  const [motDePasse, setMotDePasse] = useState();

  // ajout de firebase
  const firebase = useContext(Firebase);

      const goToInscription = ()=>{
        navigation.navigate('Inscription')
      }

      const connect =()=>{

        console.log("first", email, motDePasse);

        auth()
        .signInWithEmailAndPassword(email, motDePasse)
  .then(() => {
    console.log('User account signed in!');
  })
  .catch(error => {

    console.error(error);
  });
      }
  return (
    <View>
      <Text>Connexion</Text>
      <Input
      placeholder='Saisissez votre adresse email'
      onChangeText={value=>setEmail (value)}
      leftIcon={
        <Icone
          name='at-sign'
          size={24}
          color='black'
        />
      }
    />
      <Input
      placeholder='Votre mot de passe'
      onChangeText={value=>setMotDePasse (value)}
      secureTextEntry={affMotDePasse}//Modifie l'etat de visibilité du mot de passe
      leftIcon={
        <Icono
          name='lock'
          size={24}
          color='black'
        />
      }
     rightIcon={
        <Icona
          name={ affMotDePasse?'eye-closed':'eye'}
          onPress={()=>setaffMotDePasse(!affMotDePasse)}
          size={24}
          color='black'
        />
      }
    /> 
      <Button
      onPress={goToInscription}
      title="Inscription" 
      type="outline" />

<Button 
        onPress={connect}
        title="Connexion !" 
        type="outline" />
    </View>
  )
}

export default Connexion