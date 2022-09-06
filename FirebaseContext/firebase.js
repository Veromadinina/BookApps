import firestore from "@react-native-firebase/firestore";

// Creation du context
//Programmation orientée objet en js
class Firebase {
    firestore;
// le constructeur de la classe
    constructor(){

        //initialisation
        this.firestore = firestore();
    }

    // Première requête pour recuperer  les catégories

        getCategories = () => this.firestore.collection("Categories").get();




}

export default Firebase ;