import { useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { Router } from './router/Router';
import { NativeBaseLib } from './lib/NativeBaseLib';

SplashScreen.preventAutoHideAsync();

export function Home() {
  const [isFontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  useEffect(() => {
    if (isFontsLoaded) SplashScreen.hideAsync();
  }, [isFontsLoaded]);

  return (
    <NativeBaseLib>
      <Router />
    </NativeBaseLib>
  );
}
