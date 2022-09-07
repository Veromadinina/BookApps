import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './AllApps/First';
import Insta from './AllApps/Insta';
import News from './AllApps/AppNews';
import Tuto from './AllApps/TutoFlatlist';
import TutoFireList from './AllApps/TutoFireList'
// import DetailScreen from './AllApps/AppNews/detail';
import store from './redux/store';
import { Provider } from 'react-redux';
import Ecommerce from './AllApps/Ecommerce';


const Stack = createNativeStackNavigator();

const App = () => {
 
 
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="First" component={FirstScreen} />
      
      {/** News app screen  */}
      <Stack.Screen name="AppNews" component={News} />
      {/* <Stack.Screen name="DetailScreen" component={DetailScreen}/> */}
      
       
       {/**Insta app screen  */}
      <Stack.Screen name="AppInsta" component={Insta} />
      <Stack.Screen name="AppTuto" component={Tuto} />

      {/**Ecommerce app screen  */}
      <Stack.Screen name="AppEcommerce" component={Ecommerce} options={{headerShown:false}} />


    {/** TutoFireListScreen */}
      <Stack.Screen name="TutoFireList" component={TutoFireList} />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})