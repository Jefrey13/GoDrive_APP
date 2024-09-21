import { StackNavigationProp } from '@react-navigation/stack';

// Define el tipo de las rutas del stack principal
export type RootStackParamList = {
  WelcomeScreen1: undefined;
  WelcomeScreen2: undefined;
  WelcomeScreen3: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Otp: undefined;
  ResetPassword: undefined;
};

// Tipo de navegación unificado para todas las pantallas
export type AppNavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;