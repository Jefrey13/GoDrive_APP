import React, { useContext, useState } from 'react';
import {Text, View } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import TextInputField from '../../components/InputField';
import Title from '../../components/Title';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'ForgotPassword'>;
}

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>('');

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Title text="Forgot Password" />
      <Text style={globalStyles.description}>
        Enter your email to receive a password reset code.
      </Text>

      <TextInputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ color: theme.text }}
      />

      <Button title="Send Code" onPress={() => navigation.navigate('Otp')} />
    </View>
  );
};

export default ForgotPasswordScreen;