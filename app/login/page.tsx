'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';

import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';

export default function LoginPage() {
  const form = useForm();

  return (
    <div className="page-section">
      <div className="grid h-full max-w-[1780px] grid-cols-2 items-center justify-center px-[70px] pb-10 pt-3">
        {/* Section image */}
        <div className="relative aspect-square max-h-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)]">
          <Image
            src="/images/login.jpg"
            fill
            className="object-cover"
            alt="PC game cartoon character wearing a garment."
          />
        </div>

        {/* Login Form */}
        <div className="flex-center mx-auto w-full max-w-[427px] flex-col">
          <h1 className="mb-6 text-6xl font-bold">Sign in</h1>
          <Form {...form}>
            <form onSubmit={() => {}} className="w-full text-start">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="KDAgragas@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-5">
                    <FormLabel className="text-2xl">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <Button
                      type="button"
                      variant={'link'}
                      size={'sm'}
                      className="!m-0 p-0 text-xs font-extralight"
                    >
                      Forget your password?
                    </Button>
                  </FormItem>
                )}
              />

              <div className="!mt-20 flex items-center">
                <Checkbox id="terms2" className="mr-2" />
                <label
                  htmlFor="terms2"
                  className="text-xs font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <Button
                type="submit"
                size="xl"
                variant="golden"
                className="mt-4 w-full text-6xl"
              >
                <span>Login</span>
              </Button>
            </form>
          </Form>

          <p className="my-4 text-center text-3xl font-light">OR</p>

          <Button
            type="button"
            size="lg2"
            variant="white"
            className="mt-4 w-full text-4xl"
          >
            <span>Create Account</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
