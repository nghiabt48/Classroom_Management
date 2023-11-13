import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import { AppConText } from './src/features/AppConText';

const Login = ({promptAsync, userinfo}) => {
  
  return (
    <View>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login