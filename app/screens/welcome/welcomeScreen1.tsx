import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ProgressIndicator from '../../components/ProgressIndicator';
import { globalStyles } from '../../styles/globalStyles';
import ThemeContext from '../../context/ThemeContext';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'WelcomeScreen1'>;
}

const WelcomeScreen1: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../../assets/images/car.png')} style={globalStyles.image} />
      <Title text="Seamless Navigation For Every Trip" />
      <Text style={[globalStyles.description, { color: theme.text }]}>
        Enjoy an easy trip with seamless car navigation, optimized for your travel needs.
      </Text>
      <ProgressIndicator totalSteps={3} currentStep={0} />
      <Button title="Next" onPress={() => navigation.navigate('WelcomeScreen2')} />
    </View>
  );
};

export default WelcomeScreen1;