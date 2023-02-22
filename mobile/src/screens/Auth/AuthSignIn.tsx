import * as NB from 'native-base';

import { GoogleIcon } from '@/assets/GoogleIcon';

export function AuthSignIn() {
  return (
    <NB.Wrap
      safeArea
      flex={1}
      justifyContent="space-between"
      py="8"
      px="4"
      background="muted.50"
    >
      <NB.Text fontSize="4xl" fontWeight="semibold">
        Entrar
      </NB.Text>

      <NB.Button variant="outline" leftIcon={<GoogleIcon />} w="full">
        Entrar com Google
      </NB.Button>
    </NB.Wrap>
  );
}
