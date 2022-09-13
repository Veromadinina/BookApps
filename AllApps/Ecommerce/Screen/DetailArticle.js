import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React,{useState, useContext, useEffect} from 'react'

import { FireBaseContext } from '../../../FirebaseContext';
import ArticleDetail from '../Components/ArticleDetail';

//composant pas d'article
const NoArticle = ()=>{
  
  return (<Text>pas d'article</Text>)

}

const DetailArticle = ({route}) => {
  // Récupération de id
      const { id } = route.params ;
// je prepare la variable
      const[article, setArticle] = useState(null);
     //set article recoit les valeurs quis on t fdans la requete
      //setteur de loading
      const[load, setload] = useState(false);

      const firebase = useContext(FireBaseContext);

      const getArticle = async()=>{
        // debut chargement avant la requête
        setload(true);

        const rqArticle =  await firebase.getArticleById(id);

        //temps d'attente avant affichage de la requête
        setTimeout(()=>{

          setArticle({id: id,...rqArticle.data()});
        
          //fin de chargement avant la requête
          setload(false);


        },500)

        

        console.log(rqArticle.data());

      }
      // je declenche la fonction
      useEffect(()=>{
          getArticle();

      }, [])


  return (
    /**  si le loading est true afficher le loading sinon 
    si article est null afficher le composant sinon afiicher article*/
    <View>

     { (load==true)?<ActivityIndicator/>: 
        (article == null)?<NoArticle/>
                  :<ArticleDetail article={article}/>
                  
     }
     
    </View>
  )
}

export default DetailArticle

const styles = StyleSheet.create({})