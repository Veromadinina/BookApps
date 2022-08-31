import { COUNT_NUMB } from "../type";

const initStatCompteur = 0;

export default function(state=initStatCompteur,action){

  switch (action.type){
  
        case COUNT_NUMB :{
  
          return action.payload ;
        }
  
        default:
           return state ;
  
  }
  
  }