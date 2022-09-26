import React, {useContext,useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";

import { FireBaseContext } from '../../FirebaseContext';
import auth from '@react-native-firebase/auth';

import {addCategorie} from '../../redux/action'
import { addArticle,editUser } from '../../redux/action';


import DetailArticle from './Screen/DetailArticle';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import Panier from './Screen/Panier';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

  //crétion du composant accueil permettant la Navigation et place tout en bas
const Accueil = ()=>{

    return(

        <Stack.Navigator>
              <Stack.Screen name= 'Accueil' component={Home} options={{headerShown:false}}/>
              <Stack.Screen name= 'DetailArticle' component={ DetailArticle } options={{headerShown:false}}/>
              


        </Stack.Navigator>

    )


}

const App = () => {

const dispatch = useDispatch();

    const firebase = useContext(FireBaseContext);
    
    // initialisation premier chargement de la vue
    const initCategories = async ()=>{

      const categories =  await firebase.getCategories();
      console.log("categories.empty",categories.empty);

      //traitements des resultats
      if(!categories.empty){
        console.log("categories.empty",categories.empty);

        categories.forEach( categorieData =>{

            // const tempCategorie = {id : categorieData.id,
            //                        nom :categorieData.data().nom
            // 
            console.log("categorieData.id",categorieData.id);
            // Version déstructurée
            const tempCategorie = {id : categorieData.id,
                                   ...categorieData.data()
          }

          // affichage dans le node des élements de la data base
          //console.log("Categorie",categorieData.id, categorieData.data())
          dispatch(addCategorie(tempCategorie))

        })
      }

    }

    const initArticles = async ()=>{

      const articles =  await firebase.getArticles();

      //traitements des resultats
      if(!articles.empty){

        articles.forEach( articleData =>{

            // const tempCategorie = {id : categorieData.id,
            //                        nom :categorieData.data().nom
            // 
            
            // Version déstructurée
            const tempArticle = {id : articleData.id,
                                   ...articleData.data()
          }

          // affichage dans le node des élements de la data base
          console.log("Articles",articleData.id, articleData.data())
          
          dispatch(addArticle(tempArticle))

        })
      }

   

    }
    const authStateChanged = ( user)=>{

      console.log("authStateChanged user", user);
      dispatch(editUser(user))

    }
    useEffect(() => {

      
      
      initCategories();
      initArticles();

      const subscriber = auth().onAuthStateChanged(authStateChanged);
      return subscriber; // unsubscribe on unmount
     
    },[])
 
    return (
    
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Accueil" component={Accueil}
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name="home" size={18} />
                      ),
                    }}
        />
        <Tab.Screen name="Panier" component={Panier}
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name="shopping-basket" size={18} />
                      ),
                    }}
        />
                    
        <Tab.Screen name="Mon Compte" component={Setting}
                    options={{
                      tabBarIcon: () => (
                        <MaterialIcons name="supervised-user-circle" size={18} />
                      ),
                    }} />
      </Tab.Navigator>
    
  );
}
export default App;