import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ProgressIndicator from '../../components/ProgressIndicator';
import { globalStyles } from '../../styles/globalStyles';
import ThemeContext from '../../context/ThemeContext';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'WelcomeScreen3'>;
}

const WelcomeScreen3: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../../assets/images/destination.png')} style={globalStyles.image} />
      <Title text="Get The Car To Your Destination Easily" />
      <Text style={[globalStyles.description, { color: theme.text }]}>
        Achieve your travel goals by easily navigating to your destination in no time.
      </Text>
      <ProgressIndicator totalSteps={3} currentStep={2} />
      {/* <Button title="Start" onPress={() => navigation.replace('Login')} /> */}
      <Button title="Start" onPress={() => navigation.replace('Login')} />
    </View>
  );
};

export default WelcomeScreen3;