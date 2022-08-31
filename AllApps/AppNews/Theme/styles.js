import { StyleSheet } from "react-native"
import {colors} from './colors';

 export const styles = StyleSheet.create({
    
content : {

    backgroundColor : colors.primary,
    padding : 15,
    margin : 20,
    borderRadius : 15,
    borderWidth:1,
    borderColor :'red',
    flexDirection :'row',
    justifyContent :'space-around'
},


viewImg :{

    height : 100,
    width : 100

},

textTitre :{

    color : "white",
    fontSize : 15,
    justifyContent : 'center',
    alignItems : 'center'


},

viewText :{

    width : 250,
    height : 100,
    margin : 5,
    



},

image : {

    width :100,
    height : 100,
    borderRadius : 50



},
contentDetail :{

flex:1,


},

imageBgDetail :{

    height: 300,
    width: '100%',

},
titleText1:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
},
detailDescript:{
    
    paddingHorizontal: 20,
    top:25,
    fontSize:15,

  },



})
