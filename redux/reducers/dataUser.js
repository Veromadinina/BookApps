import { EDIT_USER } from "../type";
import { existItem } from "../../Common/fonctions";


//Mise à jour des Articles
const initStateUser = null ;

export default function(state=initStateUser,action){

  if(action.type == EDIT_USER){

          //return nextState
          //précedente valeur déstructurée [...state], nouvelle valeur dans le dispatchs[action.payload]
          return action.payload;
}else{

  return state ;


}
}