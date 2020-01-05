import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Profile from './screens/Profile';
import LoginScreen from './screens/Login';
import Cart from './screens/Cart';
import Signup from './screens/Signup';
import ViewScheduledAppointment from './screens/ViewScheduledAppointment';
import ViewProduct from './screens/ViewProduct';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import userReducer from './screens/redux/reducers/userReducer'
import addUser from './screens/redux/actions/addUser'

import thunk from 'redux-thunk'

const store = createStore(userReducer, applyMiddleware(thunk))


const MyDrawerNavigator = createDrawerNavigator(
  {
    "Login": {
      screen: LoginScreen,
    },
    "Signup": {
      screen: Signup,
    }
  },
  {
    drawerPosition: "left",
    drawerType: "slide",
    hideStatusBar: true,
    statusBarAnimation: "slide",
    contentOptions: {
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

let Navigation = createAppContainer(MyDrawerNavigator);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App
