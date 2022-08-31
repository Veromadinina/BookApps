import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {editLogin,countNumb} from '../../../redux/action';





const Connexion = () => {
     const {login,compteur}=useSelector(state=>state)
     console.log(compteur)
  const dispatch = useDispatch();
const pressConnexion =() =>{
  dispatch(editLogin(true))
  console.log("connexion")
}

  const nombrePlus =()=>{

    dispatch(countNumb(compteur + 1))

    console.log("nombrePlus");

  }

  return (
    <View>
      <Text>Connexion</Text>
      <Text>Nombre : {compteur}</Text>
      <Text>Login</Text>
      <Button 
      onPress={pressConnexion} 
      title='Connexion'
      />
      <Button 
      onPress={nombrePlus} 
      title='Incrémentation'
      />
    </View>
  )
}

export default Connexion

const styles = StyleSheet.create({})