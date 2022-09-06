import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useEffect } from 'react';


const Item = ({ nom,prenom,image}) => (
  <View style={styles.item}>

    <Text style={styles.title}>{nom}</Text>
    <Text style={styles.title}>{prenom}</Text>
    
    <View style={styles.imagen}>
    <Image style={styles.image} source={{uri:image}}/>
    </View>

  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item nom={item.nom}
          prenom={item.prenom}
          image={item.image} />
    

  );
    const [data, setData]= useState([]);
//Chargement de mon composant
useEffect(()=>{
      //Paramétrage de l'écouteur
    firestore().collection('stagiaires').onSnapshot(snapshot=>{

      // Ajouter les données recues en live dans un tableau
      let dataTemp = [];
      //console.log('snapshot',snapshot)
      snapshot.forEach(document=>{
          dataTemp.push({id: document.id,...document.data()});
          setData(dataTemp)
          console.log('document',dataTemp);
    })
  });

},[])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection : 'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 28,
    color:'white',
    padding:5,
    
  },

  image:{
    height:70,
    width:70,
    borderRadius:50,
  },

  imagen:{
    padding:10,
    


  }

  
});

export default App;