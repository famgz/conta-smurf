'use client';

import login from '@/app/(auth)/_actions/login';
import { UserLoginSchema, userLoginSchema } from '@/app/(auth)/schema';
import TogglePasswordTypeButton from '@/app/_components/buttons/toggle-password-type-button';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const params = useSearchParams();
  const emailFromURL = params.get('email') || '';
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<UserLoginSchema>({ resolver: zodResolver(userLoginSchema) });

  async function onSubmit(data: FieldValues) {
    const { email, password } = data;

    await login({ email, password })
      .then((res) => {
        if (res.success) {
          toast.success('Login successful');
          return router.push('/');
        }
        toast.error(`Error: ${res.error}`);
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 text-start xl:space-y-4"
    >
      <div>
        <Label>Email</Label>
        <Input
          {...register('email')}
          type="email"
          placeholder="KDAgragas@email.com"
          defaultValue={emailFromURL}
        />
        <div className="form-error-message">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div>
        <Label>Password</Label>

        <div className="relative">
          <Input
            {...register('password')}
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder="**********"
          />
          <TogglePasswordTypeButton
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        </div>
        <div className="form-error-message">
          <ErrorMessage errors={errors} name="password" />
        </div>

        <Button
          type="button"
          variant={'link'}
          size={'sm'}
          className="!m-0 p-0 text-xs font-extralight"
          asChild
        >
          <Link href="restore-password">Forget your password?</Link>
        </Button>
      </div>

      <div className="mt-10 flex items-center xl:mt-20">
        <Checkbox id="remember-me" className="mr-2" />
        <label
          htmlFor="remember-me"
          className="text-xs font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember me
        </label>
      </div>

      <Button
        type="submit"
        size="xl"
        variant="golden"
        className="relative mt-4 w-full text-4xl xl:text-6xl"
        disabled={isSubmitting}
      >
        <span>Login</span>
        {isSubmitting && (
          <LoaderCircleIcon
            className="absolute bottom-4 right-4 animate-spin"
            strokeWidth={3}
          />
        )}
      </Button>
    </form>
  );
}
