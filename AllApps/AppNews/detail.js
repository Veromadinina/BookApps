import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './Theme/styles';


const DetailScreen = ({route}) => {
    const {item} = route.params ;
  
    return (
    
    <View style={styles.contentDetail}>

            <ImageBackground style={styles.imageBgDetail}
        source={{uri:item.urlToImage}}
            >

            </ImageBackground>

           <View >
            <Text style={styles.titleText1}>{item.title}</Text>

           </View>

           <View>
          
          <Text style={styles.detailDescript}>{item.description}</Text>
          
          </View>



    </View>
  )
}

export default DetailScreen