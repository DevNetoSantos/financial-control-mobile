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
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
      {/* image profile */}
      <Image
        style={styles.imageProfile}
        source={{ uri: 'https://lh3.googleusercontent.com/ogw/AOLn63Gc6qHL51cTndj_59hX9TgE4MFtrMTeU23RBqfv=s32-c-mo' }}
      />
    </View>
  );
};

export default CustomDrawerHeader;
