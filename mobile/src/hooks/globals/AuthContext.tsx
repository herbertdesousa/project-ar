import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { resources } from '@/resources/resources';
import { api } from '@/services/api';

interface User {
  id_auth: string;
  email: string;
  picture: string;
  name: string;
}

interface AuthContextData {
  auth(payload: User): Promise<void>;
  user: User | undefined;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const STORAGE_KEY = '@user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const auth = useCallback(async (payload: User) => {
    setIsLoading(true);

    await resources.auth.auth(payload);

    api.defaults.headers.authorization = `Bearer ${payload.id_auth}`;

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    setUser(payload);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    (async () => {
      const storagedUser = await AsyncStorage.getItem(STORAGE_KEY);

      if (storagedUser) setUser(JSON.parse(storagedUser));

      setIsLoading(false);
    })();
  }, []);

  const signOut = useCallback(async () => {
    setIsLoading(true);

    await AsyncStorage.removeItem(STORAGE_KEY);

    setUser(undefined);

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ auth, user, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
