import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DocsScreen } from '../screens/DocsScreen';

const Stack = createNativeStackNavigator();

export function MainRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Docs" component={DocsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
