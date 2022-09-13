import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { styles } from '../../../Theme/Ecommerce/styles'


const RenderCategorie = ({categorie}) => {


return (

  <TouchableOpacity style={styles.touchCategorie}>

      <Text style={styles.textCategorie}>{categorie.nom}</Text>

  </TouchableOpacity>
)

}

const Categories = () => {
      // le reducer dataCategorie est vide à son initialisation
  const {dataCategorie} = useSelector(state=>state);

  console.log("reducer dataCategorie :", dataCategorie);
  return (
    <View style={styles.categorieContent}>
      {/* <Text style={styles.categorieTitle}>Categories</Text> */}
      <FlatList
        data={dataCategorie}
        horizontal={true}
        renderItem={({item})=><RenderCategorie categorie={item}/>}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Categories

