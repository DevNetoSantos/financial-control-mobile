import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './styles';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

const Home = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      <View style={styles.areaAccount}>
        <View style={styles.titleHome}>
          <Text style={styles.textTitle}>Minhas despesas</Text>
          <AntDesign name="right" size={24} color="white" onPress={() => navigation.navigate('Expenses')} />
        </View>
      </View>
      <View style={styles.iconsHome}>
        <AntDesign name="creditcard" size={24} color="black" onPress={() => navigation.navigate('Card')} />
        <Ionicons name="notifications-outline" size={24} color="black" onPress={() => navigation.navigate('Notifications')} />
        <Feather name="user" size={24} color="black" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  )
}

export default Home;