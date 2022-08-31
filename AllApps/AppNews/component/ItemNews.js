import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from '../Theme/styles'
import { useNavigation } from '@react-navigation/native'


const ItemNews = ({item}) => {
  
  const navigation = useNavigation() ;
  return (
    <TouchableOpacity style = {styles.content}
        onPress={()=>navigation.navigate('DetailScreen', {item})}>
        <View style = {styles.viewImg}>
             <Image
             style = {styles.image}
             source = {{uri:item.urlToImage}}
           
            /> 

        </View>
        <View style = {styles.viewText}>
            <Text style={styles.textTitre}>{item.title}</Text>

        </View>
     
    </TouchableOpacity>
  )
}

export default ItemNews