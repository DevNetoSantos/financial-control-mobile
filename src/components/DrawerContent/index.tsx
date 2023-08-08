import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
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
          <Text>@User</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <View style={styles.categoryButtons}>
          <View style={styles.catButton01}>
            <Text style={styles.textButton01}>Transações</Text>
            <AntDesign name="right" size={22} color="blue" onPress={() => navigation.navigate('')} />
          </View>
          <View style={styles.catButton02}>
            <Text style={styles.textButton02}>Cartões</Text>
            <AntDesign name="right" size={22} color="blue" onPress={() => navigation.navigate('')} />
          </View>
        </View>
        <View style={styles.sairButton}>
          <Text style={styles.textSair}>Sair</Text>
          <AntDesign name="right" size={22} color="blue" onPress={() => navigation.navigate('')} />
        </View>
      </View>
    </View>
  )
}

export default DrawerContent;