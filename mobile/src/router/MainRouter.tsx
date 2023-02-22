import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DocumentsScreen } from '../screens/DocumentsScreen';

export type MainStackParamList = {
  Documents: undefined;
};

const MainStack = createNativeStackNavigator<MainStackParamList>();

export function MainRouter() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Documents" component={DocumentsScreen} />
    </MainStack.Navigator>
  );
}
