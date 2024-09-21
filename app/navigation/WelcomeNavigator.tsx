// navigation/WelcomeNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen1 from '../screens/welcome/welcomeScreen1';
import WelcomeScreen2 from '../screens/welcome/WelcomeScreen2';
import WelcomeScreen3 from '../screens/welcome/WelcomeScreen3';

const Stack = createStackNavigator();

const WelcomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen1" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen1" component={WelcomeScreen1} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} />
      <Stack.Screen name="WelcomeScreen3" component={WelcomeScreen3} />
    </Stack.Navigator>
  );
};

export default WelcomeNavigator;