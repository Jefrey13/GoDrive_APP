import React, { useContext, useState } from 'react';
import {Text, View } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import TextInputField from '../../components/InputField';
import Title from '../../components/Title';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'ResetPassword'>;
}

const ResetPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handlePasswordReset = () => {
    if (newPassword === confirmPassword) {
      console.log('Password reset successfully');
      navigation.navigate('Login');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Title text="Reset Password" />
      <Text style={globalStyles.description}>
        Enter your new password and confirm it to reset your account.
      </Text>

      <TextInputField
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
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

      <Button title="Reset Password" onPress={handlePasswordReset} />
    </View>
  );
};

export default ResetPasswordScreen;