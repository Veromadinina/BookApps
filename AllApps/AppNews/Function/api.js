import axios from "axios"
// url de mon api
 const urlApi = 'https://newsapi.org/v2/everything?';
// // clé de mon api
 const apiKey = '8905a8b442cd4ee496d5eed5e3ab66c6'

// const urlApi = 'https://gnews.io/api/v4/search';
// // clé de mon api
// const apiKey = '742b1d4e16ff4b2a6818db8f3f39e40e'

export const apiNews = async (page) => {

    const params = {
        // paramètres de mon api
        q : 'Martinique',
        from : '2022-08-24' ,
        lang : 'fr',
        sortBy : 'popularity',
        apiKey : apiKey,
        page : page,
        pageSize : 10 
    }
    // appel des paramètres de mon api
    const {data} = await axios.get(urlApi,{params:params});
     
    //console.log('api News', data.articles)

    return data.articles
    
}