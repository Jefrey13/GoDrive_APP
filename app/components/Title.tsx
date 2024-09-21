import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
  text: string;
  style?: object;
}

const Title: React.FC<TitleProps> = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Title;