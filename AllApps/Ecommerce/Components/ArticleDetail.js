import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux';
import { addPanier } from '../../../redux/action';
import { styles } from '../../../Theme/Ecommerce/styles'

const ArticleDetail = ({article}) => {

    const dispatch = useDispatch();

          dispatch(addPanier(article))

    const ajouter = () => {

          console.log("ajouter")

    }


  return (
    <View>
      <Image style= {styles.imageDetail} source = {{ uri:article.image }}/>
      <Text style={styles.nomDetail}>{article.nom}</Text>
      <Text style= {styles.prixDetail}>{article?.prix}€</Text> 
      <Button
        
        onPress={ajouter}
        title="Ajouter au Panier"

        />
    </View>

   
  )
}

export default ArticleDetail

