import { StyleSheet } from 'react-native';
import { sizes } from '../constants/sizes';
import { colors } from '../constants/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    backgroundColor: colors.lightBackground,
  },
  title: {
    fontSize: sizes.large,
    fontWeight: 'bold',
    marginBottom: sizes.margin,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});