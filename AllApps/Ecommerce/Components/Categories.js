import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'


const data = [{id:1,nom:'cat 1'},
              {id:2,nom:'cat 1'},
              {id:3,nom:'cat 1'},
              {id:4,nom:'cat 1'},
              
            ]

const RenderCategorie = ({categorie}) => {


return (

  <TouchableOpacity style={styles.touchCategorie}>

      <Text style={styles.textCategorie}>{categorie.nom}</Text>

  </TouchableOpacity>
)

}



const Categories = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={data}
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
  height:45,
  width:100

},
textCategorie:{

  fontSize:18,
  color:"rgba(239, 250, 246, 0.91)",
  fontWeight: "500"

}



})