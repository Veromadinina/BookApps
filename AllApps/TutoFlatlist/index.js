import { View, Text,FlatList,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Tuto = () => {

    const [getNombres, setNombres] = useState([1,2,3,4,5,6,7,8,9,10]);
    const addNombre = async() => { 
        /**Creation d'une variable temporaire tempNombres
         * destructuration de getNombres en mettant 3points
         * Création d'un Nouveau tableau
         * injection de la nouvelle valeur dans le setNombres
         */await readStagiare();
        const tempNombres =[...getNombres,
                            getNombres.length+1]
        setNombres(tempNombres)
     }

     const readStagiare = async()=>{

         const user = await firestore().collection('stagiaires').doc('L6WniBN4UvfwVMvKgetu').get();

       console.log('user',user);


     }
  return (
   <FlatList
        ListHeaderComponent={<Button
            title='Add'
            onPress={addNombre}
        />}
        data={getNombres}
        renderItem={({item})=><Text>{item}</Text>}
        keyExtractor={item=>item}/**attribue une clé à l'élément qui boucle */
       /**permet d'ajouter en scrolant  */
       
   
   />
  )
}

export default Tuto