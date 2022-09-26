import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth';

// Creation du context
//Programmation orientée objet en js
class Firebase {
    firestore;
    auth; // crer le aauth dans firebase
// le constructeur de la classe
    constructor(){

        //initialisation
        this.firestore = firestore();
        this.auth = auth() ;// initialisation de l'authentification
    }

    // Première requête pour recuperer lister  les catégories

        getCategories = () => this.firestore.collection("Categories").get();
       
     // Première requête pour recuperer lister  les articles   
        getArticles = () => this.firestore.collection("Articles").get();

            // récupérer 1 article
        getArticleById = (id) => this.firestore.collection("Articles").doc(id).get();




}

export default Firebase ;