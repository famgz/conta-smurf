'use client';

import AuthWrapper from '@/app/(auth)/_components/auth-wrapper';
import LoginForm from '@/app/(auth)/login/_components/login-form';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthWrapper imageUrl="/images/login.jpg" title="Sign in">
      <>
        <LoginForm />

        <p className="my-2 text-center font-light xl:my-4 xl:text-3xl">OR</p>
        <Button
          type="button"
          size="lg2"
          variant="white"
          className="w-full text-xl xl:mt-4 xl:text-4xl"
        >
          <Link href={'/register'}>Create Account</Link>
        </Button>
      </>
    </AuthWrapper>
  );
}
