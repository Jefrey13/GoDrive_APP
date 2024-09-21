import React, { useContext, useState } from 'react';
import {Text, View } from 'react-native';
import ThemeContext from '../../context/ThemeContext';
import { globalStyles } from '../../styles/globalStyles';
import Button from '../../components/Button';
import TextInputField from '../../components/InputField';
import Title from '../../components/Title';
import { AppNavigationProp } from '../../types/navigationTypes';

interface Props {
  navigation: AppNavigationProp<'Otp'>;
}

const OtpScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const [otp, setOtp] = useState<string>('');

  return (
    <View style={[globalStyles.container, { backgroundColor: theme.background }]}>
      <Title text="Enter OTP" />
      <Text style={globalStyles.description}>
        A verification code was sent to your email. Please enter it below.
      </Text>

      <TextInputField
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        style={{ color: theme.text }}
      />

      <Button title="Verify" onPress={() => navigation.navigate('ResetPassword')} />
    </View>
  );
};

export default OtpScreen;