import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';

const RootStack = createStackNavigator();

const RootNavigator: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const checkIfFirstLaunch = async () => {
      const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
      if (isFirstLaunch === null) {
        setShowWelcome(true);
        await AsyncStorage.setItem('isFirstLaunch', 'false');
      } else {
        setShowWelcome(false);
      }
    };
    checkIfFirstLaunch();
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {showWelcome ? (
          <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
        ) : (
          <RootStack.Screen name="WelcomeNavigator" component={WelcomeNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;