import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons'
import { styles } from '../../../Theme/Ecommerce/styles'

const HeaderCommerce = () => {
  return (
    <View style = {styles.contentItext}>
    <View style = {styles.contentHd}>
      <Icone
    name = 'menu'
    size ={45}
    color = 'black'
    />
      <Text style = {styles.textHd}>Les Camelias</Text>
        <Image style = {styles.tinyImage} source ={{ uri:'https://www.decodujardin.fr/4321-large_default/camelia-du-japon.jpg',}}/>
        
      </View>
    
    <View>
    <Icone
    name = 'md-basket'
    size ={30}
    color = 'black'
    />
    </View>

    </View>
  )
}

export default HeaderCommerce

