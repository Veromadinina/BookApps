import { StyleSheet, Text, View,FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'




const RenderArticles = ({article}) => {

  const navigation = useNavigation();

  const onPressArticle = ()=>{
      navigation.navigate('DetailArticle',{id:article.id})

      console.log('article',article)
  }


  return (


  <TouchableOpacity style={styles.touchArticles}
                    onPress= {onPressArticle}>


      <Text style={styles.textArticles}>{article.nom}</Text>

  </TouchableOpacity>
)

}

const Articles = () => {
      // le reducer dataArticles est vide à son initialisation
  const {dataArticle} = useSelector(state=>state);

  console.log("reducer dataArticles :", dataArticle);
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Articles</Text>
      <FlatList
        data={dataArticle}
        horizontal={false}
        numColumns={2}
        renderItem={({item})=><RenderArticles article={item}/>}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Articles

const styles = StyleSheet.create({

content:{

    
    flex:1
},

title:{
    fontSize:25,
    fontWeight:'600'
},

touchArticles:{
    
  backgroundColor:'rgba(44, 155, 33, 0.91)',
  margin:10,
  padding:10,
  borderRadius:15,
  height:200,
  width:160

},
textArticles:{

  fontSize:13,
  color:"rgba(239, 250, 246, 0.91)",
  fontWeight: "500"

}



})