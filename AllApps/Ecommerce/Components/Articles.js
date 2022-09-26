import { StyleSheet, Text, View,FlatList ,TouchableOpacity,Image,ActivityIndicator} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../../../Theme/Ecommerce/styles'




const RenderArticles = ({article}) => {

  const navigation = useNavigation();

  const onPressArticle = ()=>{
      navigation.navigate('DetailArticle',{id:article.id})

      console.log('article',article)
  }


  return (


  <TouchableOpacity style={styles.touchArticles}
                    onPress= {onPressArticle}>


      
      <Image style={styles.imgArticle}  source = {{ uri:article.image }}/>
      <Text style={styles.textArticles}>{article.nom}</Text>
      <Text style= {styles.articlePrix}>{article?.prix}€</Text> 

  </TouchableOpacity>
)

}

const Articles = () => {
      // le reducer dataArticles est vide à son initialisation
  const {dataArticle} = useSelector(state=>state);

  console.log("reducer dataArticles :", dataArticle);
  return (
    <View style={styles.articleContent}>
      <Text style={styles.articleTitle}>Tout en fleur...</Text>
      <FlatList
        style = {{margin:5}}
        data={dataArticle}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({item})=><RenderArticles article={item}/>}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default Articles

