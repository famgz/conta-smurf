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
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormEvent } from 'react';

export default function LoginPage() {
  const form = useForm();
  const router = useRouter();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    router.push('/login');
  }

  return (
    <div className="page-section">
      <div className="grid h-full max-w-[1780px] grid-cols-2 items-center justify-center px-[70px] pb-10 pt-3">
        {/* Section image */}
        <div className="relative aspect-square max-h-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)]">
          <Image
            src="/images/register.jpg"
            fill
            className="object-cover object-left"
            alt="PC game cartoon character"
          />
        </div>

        {/* Login Form */}
        <div className="flex-center mx-auto w-full max-w-[427px] flex-col">
          <h1 className="mb-6 text-6xl font-bold">Sign up</h1>
          <Form {...form}>
            <form onSubmit={handleSubmit} className="w-full text-start">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="KDAgragas@email.com"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-2xl">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirm-password"
                render={({ field }) => (
                  <FormItem className="mt-2">
                    <FormLabel className="text-2xl">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-4 flex items-center">
                <label
                  htmlFor="terms2"
                  className="text-xs font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Your password must have:
                </label>
              </div>

              <div className="mt-4 flex justify-between text-xs font-extralight">
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span>an uppercase letter</span>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span>a number</span>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span>a symbol</span>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <div className="mt-4 flex items-center text-xs font-extralight">
                  <Checkbox id="terms2" className="mr-2" />
                  <label
                    htmlFor="terms2"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <div className="mt-4 flex items-center text-xs font-extralight">
                  <Checkbox id="terms2" className="mr-2" />
                  <label
                    htmlFor="terms2"
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with the terms of use*
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="xl"
                variant="golden"
                className="-ml-4 -mr-4 mt-4 w-full text-4xl"
              >
                <span>Create account and login</span>
              </Button>
            </form>
          </Form>
          <div className="self-start pl-10">
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
