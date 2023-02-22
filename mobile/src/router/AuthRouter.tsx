import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthSignIn } from '../screens/Auth/AuthSignIn';

export type AuthStackParamList = {
  SignIn: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthRouter() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={AuthSignIn} />
    </AuthStack.Navigator>
  );
}
