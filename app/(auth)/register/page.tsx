'use client';

import registerUser from '@/app/(auth)/_actions/register';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { UserRegister, userRegisterSchema } from '../schema';
import { EyeIcon, EyeOffIcon, LoaderCircleIcon } from 'lucide-react';

export default function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<UserRegister>({ resolver: zodResolver(userRegisterSchema) });

  async function onSubmit(data: FieldValues) {
    const { name, email, password } = data;

    await registerUser({ name, email, password })
      .then((res) => {
        toast.success(`User ${res.name} successfully registered`);
        console.log(res);
        router.push(`/login?email=${email}`);
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  }

  return (
    <div className="page-section !px-0 max-xl:!pb-5">
      <div className="flex h-full w-full flex-col items-center justify-center pb-5 max-xl:gap-4 xl:grid xl:max-w-[1780px] xl:grid-cols-2 xl:px-[70px] xl:pb-10 xl:pt-3">
        <h1 className="text-5xl font-bold xl:hidden">Sign up</h1>

        {/* Section image */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)] max-xl:-mx-5 xl:h-full">
          <Image
            src="/images/register.jpg"
            fill
            className="object-cover object-left"
            alt="PC game cartoon character"
          />
        </div>

        {/* Form */}
        <div className="flex-center hide-scrollbar mx-auto w-full max-w-[300px] flex-col overflow-y-scroll px-4 xl:max-w-[460px]">
          <h1 className="mb-6 text-6xl font-bold max-xl:hidden">Sign up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-4 text-start"
          >
            <div>
              <Label className="" htmlFor="name">
                Username
              </Label>
              <Input type="text" {...register('name')} placeholder="Username" />
              <div className="mt-1 text-xs text-red-400">
                <ErrorMessage errors={errors} name="name" />
              </div>
            </div>

            <div>
              <Label className="" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                {...register('email')}
                placeholder="KDAgragas@email.com"
              />
              <div className="mt-1 text-xs text-red-400">
                <ErrorMessage errors={errors} name="email" />
              </div>
            </div>

            <div>
              <Label className="" htmlFor="password">
                Password
              </Label>
              <div className="relative">
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  {...register('password')}
                  placeholder="**********"
                  className="relative"
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
            </div>

            <div>
              <Label className="" htmlFor="confirm_password">
                Confirm Password
              </Label>

              <div className="relative">
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  {...register('confirm_password')}
                  placeholder="**********"
                  className="relative"
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
                <ErrorMessage errors={errors} name="confirm_password" />
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <label
                htmlFor="terms2"
                className="text-xs font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Your password must have:
              </label>
            </div>

            <div className="mt-4 flex flex-wrap justify-between text-xs font-extralight max-xl:-mx-5">
              <div className="flex items-center">
                <Checkbox className="mr-2" />
                <span className="whitespace-nowrap">an uppercase letter</span>
              </div>
              <div className="flex items-center">
                <Checkbox className="mr-2" />
                <span className="whitespace-nowrap">a number</span>
              </div>
              <div className="flex items-center">
                <Checkbox className="mr-2" />
                <span className="whitespace-nowrap">a symbol</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <div className="mt-4 flex items-center text-xs font-extralight">
                <Checkbox id="remember-me" className="mr-2" />
                <label
                  htmlFor="remember-me"
                  className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <div className="mt-4 flex flex-col items-center text-xs font-extralight">
                <div>
                  <input
                    type="checkbox"
                    id="terms"
                    className="custom-checkbox mr-2"
                    {...register('terms')}
                  />
                  <label
                    htmlFor="terms"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with the terms of use*
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-1 text-right text-xs text-red-400">
              <ErrorMessage errors={errors} name="terms" />
            </div>

            <Button
              type="submit"
              size="lg2"
              variant="golden"
              className="relative w-full text-2xl xl:!mt-10 xl:text-4xl"
              disabled={isSubmitting}
            >
              <span>Create account</span>
              {isSubmitting && (
                <LoaderCircleIcon
                  className="absolute bottom-4 right-4 animate-spin"
                  strokeWidth={3}
                />
              )}
            </Button>
          </form>

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
        </div>
      </div>
    </div>
  );
}
