import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AntDesign, Feather } from '@expo/vector-icons';

import styles from './styles'

const DrawerContent = ({ navigation }: any) => {
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
          <Text>@user</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <View style={styles.categoryButtons}>
          <TouchableOpacity style={styles.catButton01}>
            <Feather name="shuffle" size={20} color="blue" />
            <Text style={styles.textButton01}>Transações</Text>
            <AntDesign name="right" size={22} color="blue" onPress={() => navigation.navigate()} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.catButton02} onPress={() => navigation.navigate('Card')}>
            <AntDesign name="creditcard" size={20} color="blue" />
            <Text style={styles.textButton02}>Cartões</Text>
            <AntDesign name="right" size={22} color="blue" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sairButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSair}>Sair</Text>
          <AntDesign name="right" size={22} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DrawerContent;