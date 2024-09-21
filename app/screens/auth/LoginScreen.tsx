import React, { useContext, useState } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import { colors } from '../../constants/colors';
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
      <View style={styles.linkContainer}>
        <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot Password?
        </Text>
      </View>


      <Button title="Login" onPress={handleLogin} />
     <View style={styles.container}>
      <Text style={[globalStyles.description, {marginBottom: 10}]}>
            You don't have an account?
          </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
            Create an account
          </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: { 
    width:'100%',
    marginBottom:20,
    borderRadius: 5,
    display:"flex",
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom:10,
  },
  link: {
    color: '#00B9E8',
    textDecorationLine: 'none',
    fontSize: 16,
  },
});
export default LoginScreen;