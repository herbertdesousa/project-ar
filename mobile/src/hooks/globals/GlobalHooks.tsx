import { AuthProvider } from './AuthContext';

export function GlobalHooks({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
