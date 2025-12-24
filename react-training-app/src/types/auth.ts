export type Role = 'admin' | 'manager' | 'viewer';

export interface AuthUser {
    id?: string;
    name?: string;
    email?: string;
    role: Role;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: AuthUser | null;
    accessToken: string | null;
    isLoading: boolean
}