import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../Components/Categories'
import Articles from '../Components/Articles'
import HeaderCommerce from '../Components/HeaderCommerce'
import { styles } from '../../../Theme/Ecommerce/styles'

const Home = () => {
  return (
    <View style={styles.content}>
       <HeaderCommerce/>
       <Categories/>
       <Articles/>
    </View>
  )
}

export default Home

