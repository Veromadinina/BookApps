import {ADD_PANIER, REMOVE_PANIER,REMOVE_ONE_PANIER} from '../type';
import {existItem} from '../../Common/fonctions';

//Mise à jour du Paniers
const initStatePanier = [];

export default function (state = initStatePanier, action) {

  if (action.type == ADD_PANIER) {

    //précedente valeur déstructurée [...state], nouvelle valeur dans le dispatchs[action.payload]
    return !existItem(state, action.payload.id)
    //existItem fonction créé rechercher l'existence de id
    //?= if
      ? [...state, action.payload]
    //:=else
      : state;
    // vider mon panier
  } else if (action.type == REMOVE_PANIER) {

   //  tableau vide du payload[]
    return action.payload;
    
  } else if (action.type == REMOVE_ONE_PANIER) {
    /**1.Rechercher la position de l'élement dans le tableau
     * 2. avec la position je supprime l'élément dans le tableau
     * 3. Rechercher dans la doc anglaise recherche Find item in array js
     * 4. utilisation de filter() 
     * Supprimer un article
     */
     return state.filter( item => item.id != action.payload.id);
     
   } else {

    return state;

  }
}
