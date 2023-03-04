import * as NB from 'native-base';

import { LogoSVG } from '@/assets/LogoSVG';

export function Loading() {
  return (
    <NB.HStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="primary.100"
    >
      <LogoSVG />
    </NB.HStack>
  );
}
