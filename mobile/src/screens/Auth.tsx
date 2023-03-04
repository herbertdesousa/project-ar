import { useEffect } from 'react';
import * as NB from 'native-base';

import * as WebBrowser from 'expo-web-browser';

import { GoogleIconSVG } from '@/assets/GoogleIconSVG';
import { LogoSVG } from '@/assets/LogoSVG';

import { useAuthRequest } from 'expo-auth-session/build/providers/Google';
import { useAuth } from '@/hooks/globals/AuthContext';

interface AuthedUser {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

WebBrowser.maybeCompleteAuthSession();

export function Auth() {
  const [, response, promptAsync] = useAuthRequest({
    expoClientId:
      '819357549818-02a91h292d83d6i1nmcidaokf9a1fumo.apps.googleusercontent.com',
    androidClientId:
      '819357549818-it0g3mh4nhtaovkldgilh98judcultr9.apps.googleusercontent.com',
    iosClientId:
      '819357549818-qksskogfjpjskg0ebbppg8m1u9u203up.apps.googleusercontent.com'
  });
  const { auth } = useAuth();

  async function handleGoogleSignIn() {
    promptAsync();
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const token = response?.authentication?.accessToken;

      (async () => {
        try {
          const res = await fetch('https://www.googleapis.com/userinfo/v2/me', {
            headers: { Authorization: `Bearer ${token}` }
          });

          const user: AuthedUser = await res.json();

          await auth({
            email: user.email,
            id_auth: user.id,
            name: user.given_name,
            picture: user.picture
          });
        } catch (error) {
          console.log(error);
          // Add your own error handler here
        }
      })();
    }
  }, [response]);

  return (
    <NB.Wrap
      safeArea
      flex={1}
      justifyContent="space-between"
      px="6"
      py="8"
      bg="muted.50"
    >
      <LogoSVG />

      <NB.VStack w="full">
        <NB.Text fontSize="3xl" fontWeight="semibold" mt="4" fontFamily="inter">
          <NB.Text color="primary.600">Simplefique</NB.Text>&nbsp;a&nbsp;
          <NB.Text color="primary.600">Gestão</NB.Text> da sua&nbsp;
          <NB.Text color="primary.600">Empresa</NB.Text>
        </NB.Text>

        <NB.Text />

        <NB.Button onPress={handleGoogleSignIn} leftIcon={<GoogleIconSVG />}>
          <NB.Text
            ml="4"
            color="white"
            fontFamily="inter"
            fontSize="lg"
            fontWeight="semibold"
          >
            Entrar com Google
          </NB.Text>
        </NB.Button>
      </NB.VStack>
    </NB.Wrap>
  );
}
