import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'

const Home = () => {
  return (
    <View style={styles.content}>
       <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

content:{
  flex:1,
  margin:10

}

})