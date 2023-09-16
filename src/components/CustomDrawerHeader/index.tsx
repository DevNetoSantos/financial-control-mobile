import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import styles from './styles';

const CustomDrawerHeader = ({ navigation }: any) => {
  const handleMenuPress = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
          <Ionicons name="menu" size={35} color="white" />
        </TouchableOpacity>
        {/* image profile */}
        <Image
          style={styles.imageProfile}
          source={{ uri: 'https://lh3.googleusercontent.com/ogw/AOLn63Gc6qHL51cTndj_59hX9TgE4MFtrMTeU23RBqfv=s32-c-mo' }}
        />
      </View>
      <View style={styles.titleHeader}>
        <Text style={styles.textHeader}>Bem vindo(a)</Text>
        <Text style={styles.textHeader}>Usuário</Text>
      </View>
      {/* viewr sobre header */}
      <View style={styles.overlay}>
        <Text style={styles.saldo}>Seu saldo total</Text>
        <Text style={styles.saldoValue}> R$ 9.500,00</Text>
      </View>
    </View>
  );
};

export default CustomDrawerHeader;
