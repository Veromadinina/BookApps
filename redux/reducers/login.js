import { EDIT_LOGIN } from "../type";

// Initialisation de la valeur du state login

const initStatLogin = false;

export default function(state=initStatLogin,action){

switch (action.type){

      case EDIT_LOGIN :{

        return action.payload ;
      }

      default:
         return state ;

}

}