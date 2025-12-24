import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../stores/auth.store';

interface ProtectedRouteProps {
  children: React.ReactElement;
  requiredRoles?: Array<'admin' | 'manager' | 'viewer'>;
}

export default function ProtectedRoute({ children, requiredRoles }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRoles && requiredRoles.length > 0) {
    const has = user && requiredRoles.includes(user.role as any);
    if (!has) return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
