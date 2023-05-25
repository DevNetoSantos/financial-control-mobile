import { View, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }: any) => {
  return (
    <View>
      <Button title='Fazer login' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default Login