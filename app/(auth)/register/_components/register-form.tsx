'use client';

import registerUser from '@/app/(auth)/_actions/register';
import { UserRegisterSchema, userRegisterSchema } from '@/app/(auth)/schema';
import TogglePasswordTypeButton from '@/app/_components/buttons/toggle-password-type-button';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function RegisterForm() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<UserRegisterSchema>({
    resolver: zodResolver(userRegisterSchema),
  });

  async function onSubmit(data: FieldValues) {
    const { name, email, password } = data;

    await registerUser({ name, email, password })
      .then((res) => {
        if (res.success) {
          toast.success(`User ${res.user?.name} successfully registered`);
          return router.push(`/login?email=${email}`);
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
        <Label htmlFor="name">Username</Label>
        <Input type="text" {...register('name')} placeholder="Username" />
        <div className="form-error-message">
          <ErrorMessage errors={errors} name="name" />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          {...register('email')}
          placeholder="KDAgragas@email.com"
        />
        <div className="form-error-message">
          <ErrorMessage errors={errors} name="email" />
        </div>
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            {...register('password')}
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
      </div>

      <div>
        <Label htmlFor="confirm_password">Confirm Password</Label>

        <div className="relative">
          <Input
            type={isPasswordVisible ? 'text' : 'password'}
            {...register('confirm_password')}
            placeholder="**********"
          />
          <TogglePasswordTypeButton
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        </div>
        <div className="form-error-message">
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
      <div className="form-error-message text-right">
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
  );
}
