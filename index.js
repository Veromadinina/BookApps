/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Firebase,{ FireBaseContext } from "./FirebaseContext"


const AppContext = () => {
  return(

    <FireBaseContext.Provider value={new Firebase()}>

        <App/>
    </FireBaseContext.Provider>
  )

}

AppRegistry.registerComponent(appName, () => AppContext);
