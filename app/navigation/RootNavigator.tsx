import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeNavigator from '../navigation/WelcomeNavigator';
import AuthNavigator from '../navigation/AuthNavigator';

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
      {showWelcome ? <WelcomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;