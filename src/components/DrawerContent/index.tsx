import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import styles from './styles'

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Image
            style={styles.imageProfile}
            source={{ uri: 'https://lh3.googleusercontent.com/ogw/AOLn63Gc6qHL51cTndj_59hX9TgE4MFtrMTeU23RBqfv=s32-c-mo' }}
          />
        </View>
        <View style={styles.areaText}>
          <Text style={styles.textName}>Usuário da Silva</Text>
          <Text>@User</Text>
        </View>
      </View>
    </View>
  )
}

export default DrawerContent;