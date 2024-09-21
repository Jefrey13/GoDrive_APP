import React, { useContext, useState } from 'react';
import {Text, View } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import TextInputField from '../../components/InputField';
import Title from '../../components/Title';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'Login'>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Login action');
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Title text="Login" />
      <Text style={globalStyles.description}>
        Access your account to enjoy all the features and benefits of our platform.
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

      <Button title="Login" onPress={handleLogin} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
    </View>
  );
};

export default LoginScreen;