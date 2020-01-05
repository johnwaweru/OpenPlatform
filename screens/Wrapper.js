import React from 'react'
import { View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


import userReducer from '../screens/redux/reducers/userReducer'
import addUser from '../screens/redux/actions/addUser'

const store = createStore(userReducer)


const Wrapper = (props) => {
  return (
    <Provider store={store}>
      <View>
        {props.children}
      </View>
    </Provider>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => dispatch(addUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)