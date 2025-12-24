import { persist } from 'zustand/middleware';
import type { AuthUser, Role } from '../types/auth';
import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';

type SetAccessToken = (token: string | null) => void;

interface RawJwt {
  sub?: string;
  name?: string;
  email?: string;
  role?: Role;
  exp?: number;
}

interface AuthStore {
  accessToken: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  setAccessToken: (token: string | null) => void;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      accessToken: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,

      setAccessToken(token) {
        if (!token) {
          set({ accessToken: null, user: null, isAuthenticated: false });
          return;
        }
        let user: AuthUser | null = null;
        try {
          const decoded = jwtDecode<RawJwt>(token);
          user = {
            id: decoded.sub ?? '',
            name: decoded.name,
            email: decoded.email ?? '',
            role: (decoded.role as Role) ?? 'viewer',
          };
        } catch (e) {
          user = null;
        }
        set({ accessToken: token, user, isAuthenticated: !!user });
      },

      login(token: string, user: AuthUser) {
        set({ accessToken: token, user, isAuthenticated: true });
      },

      logout() {
        set({ accessToken: null, user: null, isAuthenticated: false });
        // Optionally call logout API to clear refresh token on server
        try {
          fetch(`${import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000'}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
          });
        } catch {}
      },
    }),
    {
      name: 'auth-storage', // key in localStorage
      partialize: (state: AuthStore) => ({ accessToken: state.accessToken, user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
);

// Also export a getter function so non-react modules (apiClient) can access/update store
export const getAuthStore = () => useAuthStore;
export default useAuthStore;
