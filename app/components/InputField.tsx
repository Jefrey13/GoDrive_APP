// components/TextInputField.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: object;
}

const TextInputField: React.FC<TextInputProps> = ({ placeholder, value, onChangeText, secureTextEntry = false, style }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor={colors.grey}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 12,
    borderRadius: 5,
    marginBottom: 20,
    width:'100%',
    color: colors.darkText,
  },
});

export default TextInputField;