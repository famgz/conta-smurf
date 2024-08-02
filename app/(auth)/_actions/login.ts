'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

interface Props {
  email: string;
  password: string;
}

export default async function login({ email, password }: Props) {
  return await signIn('credentials', {
    email,
    password,
    redirect: false,
  })
    .then((res) => {
      return {
        success: true,
        error: null,
      };
    })
    .catch((err: AuthError) => {
      if (err.type === 'CredentialsSignin') {
        return { success: false, error: 'Invalid credentials' };
      }
      throw err;
    });
}
