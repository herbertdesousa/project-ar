import { NavigationContainer } from '@react-navigation/native';

import { AuthRouter } from './AuthRouter';
import { MainRouter } from './MainRouter';

export function Router() {
  return (
    <NavigationContainer>
      {/* <MainRouter /> */}
      <AuthRouter />
    </NavigationContainer>
  );
}
