import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Components
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import AddScreen from './components/main/Add'

import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import MainScreen from './components/Main';

const store = createStore(rootReducer, applyMiddleware(thunk));

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//If deployed as a real application it would be in an .env file
const firebaseConfig = {
  apiKey: "AIzaSyC1vrZSxo-0MezkhPeiUsz0EGp2Bf-ZBXk",
  authDomain: "instagramclone-660bc.firebaseapp.com",
  projectId: "instagramclone-660bc",
  storageBucket: "instagramclone-660bc.appspot.com",
  messagingSenderId: "598062086860",
  appId: "1:598062086860:web:f21e19db0dfb5137d1a069",
  measurementId: "G-YZV4MDT75J"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loaded:false
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) =>{
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else{
        this.setState({
          loggedIn:true,
          loaded: true,
        })
      }
    })
  }
  render(){
    const {loggedIn, loaded} = this.state;
    if(!loaded){
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
  if(!loggedIn){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
   }
   return (
     <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Add' component={AddScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
  }
}
 

