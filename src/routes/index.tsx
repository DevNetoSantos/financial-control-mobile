import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Login from '../screens/Login';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator /* screenOptions={{ headerShown: false }} */>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

// Navegação de gaveta
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Stack" component={Home} />
    </Drawer.Navigator>
  );
}


export { StackNavigator, DrawerNavigator }