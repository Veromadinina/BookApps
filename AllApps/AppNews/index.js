import {Text, FlatList, Button,ActivityIndicator} from 'react-native';
import React from 'react';
import ItemNews from './component/ItemNews';
import {useState,useEffect} from 'react';
import { apiNews } from './Function/api';
import RenderEmptyComponent from './component/RenderEmptyComponent';

/**constantes qui permettent d'utiliser useStates() : changement d'état
 * mettre à jour des données dans une variable.
 */
//  clé api : 8905a8b442cd4ee496d5eed5e3ab66c6
const NewsScreen = () => {
  const [getNews, setNews] = useState([]);
  
  // indicateur du waiting
  const [waiting, setWaiting] = useState(false);

  // gestion de la pagination
  const [getPage, setPage] = useState(1);
  
  // creation de l'action de l'ajout
  const loadNews = async () => {
     
    //chargement de mon API = apiNews();
     // constante qui sera envoyé dans le setNews
    const articles = await apiNews(getPage);

    // déclenchement de l'activityIndicator
    setWaiting(true);

   // retarder l'affichage de 5 secondes 
    setTimeout(()=>{
                  /* ajout de mes articles, destructure les articles
                  et getNews permettant l'agrandissement*/
                  setNews([...getNews , ...articles])
                  //arrete mon waiting
                  setWaiting(false);
    },2000);
  
  };
      // load more
    const nextPage = async ()=>{

        setPage(getPage+1);

        loadNews()


      }
    useEffect(()=>{
      //applique le waiting de 5 s des l'ouverture
      setWaiting(true);
     
      //initialisation des mes articles
      loadNews()

    },[])

  return (
    /**La FlatList permet d'afficher une liste d'éléments : 3 éléments
     * indispensable 1data 2renderitem 3keyExtractor
     */
    <FlatList

        data={getNews}
        renderItem={({item}) => <ItemNews item={item} />}
        keyExtractor={(item, index) => 'key'+index}
      /**création d'un bouton dans l'entête de la FlatList
       *  pour ajouter des news qui proviennent de la data */
        ListHeaderComponent={
        <Button
          title="Next"
          /**permet le fonctionnement du button */
          onPress={nextPage}
        />
      }
      
      /**permet d'informer qu'il n'y a pas de news : data vide */
      ListEmptyComponent={<RenderEmptyComponent waiting={waiting}/>}
      /* permet d'afficher l'ActivityIndicator si waiting =true et 
      existence de data*/
      ListFooterComponent={(waiting && getNews.length > 0) && <ActivityIndicator/>} 
      
    />
  );
};

export default NewsScreen;
