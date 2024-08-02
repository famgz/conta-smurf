'use client';

import AuthWrapper from '@/app/(auth)/_components/auth-wrapper';
import RegisterForm from '@/app/(auth)/register/_components/register-form';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <AuthWrapper title="Sign up" imageUrl="/images/register.jpg">
      <>
        <RegisterForm />

        <div className="mt-2 self-start xl:pl-10">
          <span className="!m-0 p-0 text-xs font-extralight">
            Already has an account?{' '}
          </span>
          <Button
            type="button"
            variant={'link'}
            size={'sm'}
            className="!m-0 p-0 text-xs font-extralight"
            asChild
          >
            <Link href={'/login'}>sign in</Link>
          </Button>
        </div>
      </>
    </AuthWrapper>
  );
}
