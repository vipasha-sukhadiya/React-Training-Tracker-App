import type { Role } from '../types/auth';

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  allowedRoles?: Role[]; // if omitted -> all roles
}

export const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/', allowedRoles: ['admin', 'manager', 'viewer'] },
  { id: 'items', label: 'Items', path: '/items', allowedRoles: ['admin', 'manager'] },
  { id: 'users', label: 'Users', path: '/users', allowedRoles: ['admin'] },
  { id: 'settings', label: 'Settings', path: '/settings', allowedRoles: ['admin', 'manager'] },
];
