import React from 'react'
import { View, Text, Button } from 'react-native'
import Wrapper from './Wrapper'

import { addUser } from './redux/actions/addUser';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

const Login = (props) => {

  const handleChange = () => {
    props.addUser({name: "example user"})
  }

  return (
    <View>
      <Text>New Login goes here </Text>
      <Button title="LOG IN" onPress={() => handleChange()} />
      {/* <Text>{props.user.name}</Text> */}
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
