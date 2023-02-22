import { extendTheme, NativeBaseProvider } from 'native-base';

const theme = extendTheme({
  colors: {
    gray: {
      200: '#E7E5E4'
    },
    muted: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      900: '#0F172A'
    },
    red: {
      500: '#B91C1C'
    },
    primary: {
      100: '#DBEAFE',
      600: '#2563EB'
    }
  },
  fontConfig: {
    Inter: {
      400: { normal: 'Inter_400Regular' },
      500: { normal: 'Inter_500Medium' },
      600: { normal: 'Inter_600SemiBold' },
      700: { normal: 'Inter_700Bold' }
    },
    Roboto: {
      400: { normal: 'Roboto_400Regular' },
      500: { normal: 'Roboto_500Medium' },
      700: { normal: 'Roboto_700Bold' }
    }
  },
  fonts: {
    inter: 'Inter',
    roboto: 'Roboto'
  },
  components: {
    Button: {
      defaultProps: {
        _text: {
          fontFamily: 'inter',
          fontWeight: 'medium',
          fontSize: 16
        }
      },
      variants: {
        outline: {
          _text: {
            color: 'muted.900'
          }
        }
      }
    }
  }
});

type NativeBaseLibProps = { children: React.ReactNode };

export function NativeBaseLib({ children }: NativeBaseLibProps) {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
}
