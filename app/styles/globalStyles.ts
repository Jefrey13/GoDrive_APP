import { StyleSheet } from 'react-native';
import { sizes } from '../constants/sizes';
import { colors } from '../constants/colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    backgroundColor: colors.lightBackground,
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  title: {
    fontSize: sizes.large,
    fontWeight: 'bold',
    marginBottom: sizes.margin,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode:'contain',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color:colors.grey,
  },
});