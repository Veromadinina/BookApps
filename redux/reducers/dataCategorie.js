import {ADD_CATEGORIE} from '../type';
import {existItem} from '../../Common/fonctions';

//Mise à jour des categories
const initStateCategories = [];

export default function (state = initStateCategories, action) {

  if (action.type == ADD_CATEGORIE) {

    //précedente valeur déstructurée [...state], nouvelle valeur dans le dispatchs[action.payload]
    return !existItem(state, action.payload.id)
    //existItem fonction créé rechercher l'existence de id
    //?= if
      ? [...state, action.payload]
    //:=else
      : state;
    
  } else {

    return state;

  }
}
