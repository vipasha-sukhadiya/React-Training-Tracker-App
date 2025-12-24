import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import api from '../services/apiClient';
import useAuthStore from '../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import { AuthUser } from '../types/auth';

type LoginPayload = { email: string; password: string };
type LoginResponse = { accessToken: string; user: AuthUser };

export default function Login() {
  const { register, handleSubmit } = useForm<LoginPayload>();
  const navigate = useNavigate();
  const loginToStore = useAuthStore((s) => s.login);

  const mutation = useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const res = await api.post<LoginResponse>('/auth/login', payload, { withCredentials: true });
      return res.data;
    },
    onSuccess(data) {
      // store tokens/user
      loginToStore(data.accessToken, data.user);
      navigate('/');
    },
    onError(err) {
      console.error('Login failed', err);
      // show notification
    },
  });

  const onSubmit = (data: LoginPayload) => mutation.mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="...">
      <input {...register('email')} placeholder="email" />
      <input {...register('password')} type="password" />
      <button type="submit">
        Login
      </button>
    </form>
  );
}
