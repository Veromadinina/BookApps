import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'


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
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
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

const styles = StyleSheet.create({

content:{

    
    height:100,
    width:"100%"
  
},

title:{
    fontSize:25,
    fontWeight:'600'
},

touchCategorie:{
    
  backgroundColor:'rgba(44, 155, 33, 0.91)',
  margin:10,
  padding:10,
  borderRadius:15,
  height:50,
  width:125

},
textCategorie:{

  fontSize:13,
  color:"rgba(239, 250, 246, 0.91)",
  fontWeight: "500"

}



})