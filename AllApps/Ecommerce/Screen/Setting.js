import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Private from '../Private'
import Public from '../Public'
const Setting = () => {

  const {dataUser}= useSelector(state=>state)
  console.log('dataUser',dataUser)
  return (
    //si l'Etat de user conrrepond à privé afficher sinon afficher public
    dataUser?<Private/>:<Public/>
  )
}

export default Setting

const styles = StyleSheet.create({})