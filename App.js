import { StyleSheet } from 'react-native';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import AddMakanan from './src/screen/AddMakanan';
import AccUser from './src/screen/AccUser';
import UpdatePass from './src/screen/UpdatePass';
import UpdateUser from './src/screen/UpdateUser';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/context/auth-context';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName={'HomeScreen'}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='DetailScreen' component={DetailScreen} />
          <Stack.Screen name='AddMakanan' component={AddMakanan} />
          <Stack.Screen name='AccUser' component={AccUser} />
          <Stack.Screen name='UpdatePass' component={UpdatePass} />
          <Stack.Screen name='UpdateUser' component={UpdateUser} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
