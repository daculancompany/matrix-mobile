import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Router = createStackNavigator(
    {
      HomeScreen,
      LoginScreen,
      RegisterScreen,
      ForgotPasswordScreen,
      Dashboard,
    },
    {
      initialRouteName: 'HomeScreen',
      headerMode: 'none',
    }
  );

export default NavigationContainer(Router);
