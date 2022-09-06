import React, {useContext,useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import { FireBaseContext } from '../../FirebaseContext';




const Tab = createBottomTabNavigator();

const App = () => {

    const firebase = useContext(FireBaseContext);
    
    // initialisation premier chargement de la vue
    const initCategories = async ()=>{

      const categories =  await firebase.getCategories();

      //traitements des resultats
      if(!categories.empty){

        categories.forEach( categorieData =>{
          // affichage dans le node des élements de la data base
          console.log("Categorie",categorieData.id, categorieData.data())

        })
      }

    }

    
    useEffect(() => {
      
      initCategories();
     
    },[])
 
    return (
    
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Accueil" component={Home} />
        <Tab.Screen name="Mon Compte" component={Setting} />
      </Tab.Navigator>
    
  );
}
export default App;