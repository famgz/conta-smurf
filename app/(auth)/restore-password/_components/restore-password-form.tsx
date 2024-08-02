'use client';

import {
  RestorePasswordSchema,
  restorePasswordSchema,
} from '@/app/(auth)/schema';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

export default function RestorePasswordForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<RestorePasswordSchema>({
    resolver: zodResolver(restorePasswordSchema),
  });

  async function onSubmit(data: FieldValues) {
    const { email } = data;
    router.push('/');
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 text-start xl:space-y-4"
    >
      <Label>Email</Label>
      <Input
        type="email"
        {...register('email')}
        placeholder="KDAgragas@email.com"
      />
      <div className="form-error-message">
        <ErrorMessage errors={errors} name="email" />
      </div>

      <Label>Confirm Email</Label>
      <Input
        type="email"
        {...register('confirm_email')}
        placeholder="KDAgragas@email.com"
      />
      <div className="form-error-message">
        <ErrorMessage errors={errors} name="confirm_email" />
      </div>

      <Button
        type="submit"
        size="xl"
        variant="golden"
        className="!xl:mt-20 !mt-10 w-full text-2xl xl:text-4xl"
      >
        <span>Send Email</span>
      </Button>
    </form>
  );
}
