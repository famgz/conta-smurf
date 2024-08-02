'use client';

import AuthWrapper from '@/app/(auth)/_components/auth-wrapper';
import RestorePasswordForm from '@/app/(auth)/restore-password/_components/restore-password-form';
import { Button } from '@/app/_components/ui/button';
import Link from 'next/link';

export default function RestorePasswordPage() {
  return (
    <AuthWrapper
      title="Restore Password"
      imageUrl="/images/restore-password.jpg"
    >
      <>
        <RestorePasswordForm />

        <div className="self-start xl:pl-10">
          <span className="!m-0 p-0 font-extralight max-xl:text-xs">
            You remembered the password?{' '}
          </span>
          <Button
            type="button"
            variant={'link'}
            size={'sm'}
            className="!m-0 p-0 text-xs font-extralight"
            asChild
          >
            <Link href={'/login'}>try login!</Link>
          </Button>
        </div>
      </>
    </AuthWrapper>
  );
}
