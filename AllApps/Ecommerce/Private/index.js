import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import {editLogin} from '../../../redux/action';

const Private = () => {
  const dispatch = useDispatch();
  const pressConnexion =() =>{
    dispatch(editLogin(false))
    console.log("déconnexion")
  
  
  
  }
  return (
    <View>
      <Text>Private</Text>
      <Button 
      onPress={pressConnexion} 
      title='Déconnexion'
      color={'red'}
      />
    </View>
  )
}

export default Private

const styles = StyleSheet.create({})