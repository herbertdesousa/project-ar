import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import { useAuth } from '@/hooks/globals/AuthContext';

import { Auth, Loading } from '@/screens';
import { MainRouter } from './MainRouter';

SplashScreen.preventAutoHideAsync();

export function Router() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) SplashScreen.hideAsync();
  }, [isLoading]);

  return (
    <NavigationContainer>
      {!isLoading && !user && <Auth />}
      {!isLoading && user && <MainRouter />}

      {isLoading && <Loading />}
    </NavigationContainer>
  );
}
