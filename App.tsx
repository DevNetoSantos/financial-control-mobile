import 'react-native-gesture-handler';
import { StackNavigator } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#4870FB" barStyle="light-content" />
      <StackNavigator />
    </NavigationContainer>
  );
}