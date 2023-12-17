import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import Login from '../screen/Login';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
  
      <Stack.Navigator initialRouteName='Login'>
        {/* Use 'component' prop to specify the component for each Screen */}
        <Stack.Screen
          name='Login'
          component={Login} // Specify the component to render
          options={{ title: 'Login',headerShown:false }} // Optional: Screen options like title
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen} // Specify the component to render
          options={{ title: 'Home' }} // Optional: Screen options like title
        />
      </Stack.Navigator>
      
    
  );
};

export default Auth;
