import { ADD_ARTICLE } from "../type";
import { existItem } from "../../Common/fonctions";


//Mise à jour des Articles
const initStateArticles = [] ;

export default function(state=initStateArticles,action){

  if(action.type == ADD_ARTICLE){

          //return nextState
          //précedente valeur déstructurée [...state], nouvelle valeur dans le dispatchs[action.payload]
          return !existItem(state,action.payload.id)?[...state,action.payload]:state;
}else{

  return state ;


}
}