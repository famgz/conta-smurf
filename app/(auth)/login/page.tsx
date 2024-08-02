'use client';

import login from '@/app/(auth)/_actions/login';
import { UserLogin, userLoginSchema } from '@/app/(auth)/schema';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginPage() {
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
  } = useForm<UserLogin>({ resolver: zodResolver(userLoginSchema) });

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
    <div className="page-section !px-0 max-xl:!pb-5">
      <div className="flex h-full w-full flex-col items-center justify-center pb-5 max-xl:gap-4 xl:grid xl:max-w-[1780px] xl:grid-cols-2 xl:px-[70px] xl:pb-10 xl:pt-3">
        <h1 className="text-5xl font-bold xl:hidden">Sign in</h1>

        {/* Section image */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)] max-xl:-mx-5 xl:h-full">
          <Image
            src="/images/login.jpg"
            fill
            className="object-cover"
            alt="PC game cartoon character wearing a garment."
          />
        </div>

        {/* Form */}
        <div className="flex-center mx-auto w-full max-w-[280px] flex-col xl:max-w-[427px]">
          <h1 className="mb-6 text-6xl font-bold max-xl:hidden">Sign in</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4 text-start"
          >
            <div>
              <Label className="">Email</Label>
              <Input
                {...register('email')}
                type="email"
                placeholder="KDAgragas@email.com"
                defaultValue={emailFromURL}
              />
              <div className="mt-1 text-xs text-red-400">
                <ErrorMessage errors={errors} name="email" />
              </div>
            </div>

            <div>
              <Label className="">Password</Label>

              <div className="relative">
                <Input
                  {...register('password')}
                  type="password"
                  placeholder="**********"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-muted-foreground"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                >
                  {isPasswordVisible ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
                </button>
              </div>
              <div className="mt-1 text-xs text-red-400">
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

          <p className="my-2 text-center font-light xl:my-4 xl:text-3xl">OR</p>

          <Button
            type="button"
            size="lg2"
            variant="white"
            className="w-full text-xl xl:mt-4 xl:text-4xl"
          >
            <Link href={'/register'}>Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
