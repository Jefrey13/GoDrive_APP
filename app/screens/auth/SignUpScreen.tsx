import React, { useContext, useState } from 'react';
import {Text, View } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import TextInputField from '../../components/InputField';
import Title from '../../components/Title';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'SignUp'>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Title text="Sign Up" />
      <Text style={globalStyles.description}>
        Create a new account to start enjoying all the benefits of our platform.
      </Text>

      <TextInputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ color: theme.text }}
      />
      <TextInputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ color: theme.text }}
      />
      <TextInputField
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ color: theme.text }}
      />

      <Button title="Sign Up" onPress={() => console.log('Sign Up action')} />
    </View>
  );
};

export default SignUpScreen;