import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import DrawerContent from '../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerHeader from '../components/CustomDrawerHeader';


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
    <Drawer.Navigator
      /* header drawer*/
      screenOptions={{
        header: (props) => <CustomDrawerHeader {...props} />,
      }}
      /* header content */
      drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen name="HomeStack" component={Home} />
    </Drawer.Navigator>
  );
}


export { StackNavigator, DrawerNavigator }