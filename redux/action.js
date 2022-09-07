import { ADD_ARTICLE, ADD_CATEGORIE, EDIT_LOGIN } from "./type";
import { COUNT_NUMB } from "./type";

export const editLogin = (login)=>({

  type : EDIT_LOGIN,
  payload : login

})

export const countNumb = (compteur)=>({

  type : COUNT_NUMB,
  payload :compteur


})

export const addCategorie = (categorie)=>({

// j'ai créé mon type j'ai crée mon action
    type:ADD_CATEGORIE,
    payload : categorie


})

export const addArticle = (article)=>({

  // j'ai créé mon type j'ai crée mon action
      type:ADD_ARTICLE,
      payload : article
  
  
  })