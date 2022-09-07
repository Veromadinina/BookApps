import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useContext, useEffect} from 'react'

import { FireBaseContext } from '../../../FirebaseContext';



const DetailArticle = ({route}) => {
  // Récupération de id
      const { id } = route.params ;
// je prepare la variable
      const[article, setArticle] = useState();

      const firebase = useContext(FireBaseContext);

      const getArticle = async()=>{

        const rqArticle =  await firebase.getArticleById(id);

      }
      // je declenche la fonction
      useEffect(()=>{


      }, [])


  return (
    <View>
      <Text>Le détail de mon article</Text>
    </View>
  )
}

export default DetailArticle

const styles = StyleSheet.create({})