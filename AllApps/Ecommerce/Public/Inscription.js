import { View, Text } from 'react-native'
import React, { useState, useContext }from 'react'

import { Button, Input } from '@rneui/themed';

import Firebase from '../../../FirebaseContext/firebase';
import auth from '@react-native-firebase/auth';

import { useNavigation } from '@react-navigation/native'
//Mes Icones
import Icone from 'react-native-vector-icons/Feather'
import Icona from 'react-native-vector-icons/Octicons'
import Icono from 'react-native-vector-icons/MaterialIcons'



const Inscription = () => {
  const navigation = useNavigation();
    // modifier mon état de visibilité du mot de passe
  const [affMotDePasse, setaffMotDePasse] = useState(true);

  const [email, setEmail] = useState();
  const [motDePasse, setMotDePasse] = useState();
  
  // ajout de firebase
  const firebase = useContext(Firebase);

      const goToConnexion = ()=>{
        navigation.navigate('Connexion');
      }

      const save =()=>{

        console.log("first", email, motDePasse);

        auth()
        .createUserWithEmailAndPassword(email, motDePasse)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {

    console.error(error);
  });
      }
  return (
    <View>
      <Text>Inscription</Text>
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
        onPress={save}
        title="Je m'inscris !" 
        type="outline" />

      <Button 
        onPress={goToConnexion}
        title="Je me connecte !" 
        type="outline" />

    </View>
  )
}

export default Inscription