import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Button } from '@rneui/base'
import { removePanier,removeOnePanier } from '../../../redux/action'




const PanierItem = ({item})=>{

  const dispatch = useDispatch();
      //Supprimer un article
      const removeOne = () => {

          dispatch(removeOnePanier(item))

      }
    return(
        <View style={styles.contentPanier}>
            
            <Text style= {styles.nom}>{item.nom}</Text>
           <Text style= {styles.prix}>{item?.prix}€</Text> 
           <Button
           onPress={removeOne}
           title='Supp'
           />


        </View>

    )

}
const Panier = () => {
       
    const {dataPanier} = useSelector(state=>state)
    console.log('dataPanier', dataPanier)

    const dispatch = useDispatch();


     //Action de vider
     const remove = () => {
        
        dispatch(removePanier()); //Je vide mon panier
        console.log("Remove")

    }
  
  
    return (
    <View>
      <FlatList
        data={dataPanier}
        renderItem={({item})=><PanierItem item={item}/>}
        keyExtractor={item =>item.id}
      />

      <Button
          title='Vider le panier'
          onPress={remove}
      
      />
    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  contentPanier:{
    width:'100%',
    height:120,
    backgroundColor:'red',
    padding :5,
    margin:5,
    borderRadius:10

  },
  nom:{

    color:'white',
    fontSize:25,
  },

  prix:{

    color:'white',
    fontSize:25,
  },




})