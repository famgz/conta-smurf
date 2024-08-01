'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

interface Props {
  email: string;
  password: string;
}

// export default async function login(formData: FormData) {
//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;
export default async function login({ email, password }: Props) {
  await signIn('credentials', { email, password }).catch((err: AuthError) => {
    if (err.type === 'CredentialsSignin') {
      err.message = 'Invalid credentials';
      throw err;
    }
  });

  redirect('/user');
}
