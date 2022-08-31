import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

const RenderEmptyComponent = ({waiting}) => {
  return (
    <View style ={styles.content}>
     {  waiting? 
     <ActivityIndicator/>:
     <Text>Pas de news</Text>
     }
    </View>
  )
}

export default RenderEmptyComponent

const styles = StyleSheet.create({

    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:500


    },


})