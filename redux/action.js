import { ADD_ARTICLE, ADD_CATEGORIE, ADD_PANIER, EDIT_LOGIN, REMOVE_PANIER, REMOVE_ONE_PANIER,EDIT_USER } from "./type";
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

  export const addPanier = (panier)=>({

    // j'ai créé mon type j'ai crée mon action
        type:ADD_PANIER,
        payload : panier
    
    
    })

  export const removePanier = ()=>({

      // j'ai créé mon type j'ai crée mon action pour vider mon panier
          type:REMOVE_PANIER,
          payload : []
      
      
      })

      export const removeOnePanier = (panier)=>({

        // j'ai créé mon type j'ai crée mon action pour vider mon panier
            type:REMOVE_ONE_PANIER,
            payload : panier
        
        
        })
        export const editUser = (user)=>({

          type : EDIT_USER,
          payload : user
        
        })