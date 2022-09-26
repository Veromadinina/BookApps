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
    width:"80%",
    paddingTop:30
  
},

categorieTitle:{
    fontSize:30,
    fontWeight:'600',
    
   
},

touchCategorie:{
    
  // backgroundColor:'rgba(99, 243, 39, 0.52)',
  margin:10,
  padding:10,
  // borderRadius:15,
  // borderWidth :1,
  height:50,
  width:150,
  borderColor:'rgba(44, 155, 33, 0.91)'

},
textCategorie:{

  fontSize:25,
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
    fontSize:25,
    color:"#081c15",
    fontWeight:'600',
    // backgroundColor :'#ffe5ec',
    borderRadius : 15,
    height: 50,
    fontStyle :'italic'
  
},

touchArticles:{
    
  backgroundColor:'#f6fff8',
  
  height:200,
  width:150,
  borderRadius:15,

},
textArticles:{

  fontSize:17,
  fontWeight:'bold',
  color:"#081c15",
 
  
 

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

row:{

  flex : 1,
  justifyContent: "space-around"
},







  /**END CARD ARTICLE */

  /**ARTICLEDetail */

  imageDetail:{

    width:400,
    height:350

  },

  nomDetail : {
    textAlign :'center',
    fontSize: 25,
    color:"#081c15",

  },
  prixDetail:{

    textAlign :'center',
    color :'rgba(44, 155, 33, 0.91)',
    fontSize: 20,

  },

  
  /**END ARTICLE Detail */

  /**HeaderCommerce */

contentHd : {
  flexDirection:'row',
  top :5


},

textHd:{

fontSize : 30,
fontStyle :'italic',
padding:10,
color:"#081c15",

},

tinyImage:{

height :60,
width : 60,
top : 20,
borderRadius :45

},


contentItext :{

  justifyContent: 'space-between',
  flexDirection :'row'

}
  
  /**EndHeaderCommerce */



})