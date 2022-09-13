import { StyleSheet } from 'react-native'
import { colors } from './colors'


 export const styles = StyleSheet.create({

  content:{
      flex:1,
      backgroundColor:colors.BgColorPrimary,
      paddingTop : 10,
      paddingHorizontal: 10

  },

  /** Categories*/ 
  categorieContent:{

    
    height:100,
    width:"100%"
  
},

categorieTitle:{
    fontSize:25,
    fontWeight:'600',
    
   
},

touchCategorie:{
    
  // backgroundColor:'rgba(99, 243, 39, 0.52)',
  margin:10,
  padding:10,
  borderRadius:15,
  borderWidth :1,
  height:50,
  width:150,
  borderColor:'rgba(44, 155, 33, 0.91)'

},
textCategorie:{

  fontSize:13,
  color:colors.TextPrimary,
  textTransform:'capitalize',//pour uniformiser le texte
  fontWeight: "500"

},
  /**END */

  /**CARD ARTICLE */
articleContent:{

    
    flex:1
},

articleTitle:{
    fontSize:20,
    color:"#081c15",
    fontWeight:'600',
    backgroundColor :'#ffe5ec',
    height: 75,
    padding :10,
    margin :10
  
},

touchArticles:{
    
  backgroundColor:'#f6fff8',
  margin:10,
  padding:10,
  // borderRadius:50,
  height:200,
  width:150

},
textArticles:{

  fontSize:16,
  fontWeight:'bold',
  color:"#081c15",
  fontWeight: "500",
 

},

imgArticle :{
    height :135,
    width:140,
    bottom:10,
    margin:-6
    // borderRadius : 100




},

articlePrix :{

color :'rgba(44, 155, 33, 0.91)',
justifyContent:'center',



},







  /**END CARD ARTICLE */

  /**ARTICLEDetail */

  imageDetail:{

    width:400,
    height:350

  }


  /**END ARTICLE Detail */



})