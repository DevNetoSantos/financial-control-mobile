import { View, Button, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.imageLogo}
          source={require('../../../assets/controll_finance-removebg-preview.png')}
        />
      </View>
      <View>
        {/* <Text style={styles.textLogin}>Login</Text> */}
      </View>
      <View style={styles.areInput}>
        <TextInput style={styles.textInput} placeholder='Digite seu e-mail' />
        <TextInput style={styles.textInput} placeholder='Digite sua senha' />
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.titlelogin}>Fazer Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;