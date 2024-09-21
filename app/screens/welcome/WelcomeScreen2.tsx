import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import Title from '../../components/Title';
import Button from '../../components/Button';
import ProgressIndicator from '../../components/ProgressIndicator';
import { globalStyles } from '../../styles/globalStyles';
import ThemeContext from '../../context/ThemeContext';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'WelcomeScreen2'>;
}

const WelcomeScreen2: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../../assets/images/progress.png')} style={globalStyles.image} />
      <Title text="Track Your Progress, Reach Your Goals" />
      <Text style={[globalStyles.description, { color: theme.text }]}>
        Monitor your driving and progress seamlessly with our easy-to-use interface.
      </Text>
      <ProgressIndicator totalSteps={3} currentStep={1} />
      <Button title="Next" onPress={() => navigation.navigate('WelcomeScreen3')} />
    </View>
  );
};

export default WelcomeScreen2;