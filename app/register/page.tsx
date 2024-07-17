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

export default function RegisterPage() {
  const form = useForm();
  const router = useRouter();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    router.push('/login');
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
        <div className="flex-center mx-auto w-full max-w-[280px] flex-col xl:max-w-[427px]">
          <h1 className="mb-6 text-6xl font-bold max-xl:hidden">Sign up</h1>
          <Form {...form}>
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 text-start"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="KDAgragas@email.com"
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
                  <FormItem className="">
                    <FormLabel className="">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
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
                  <FormItem className="">
                    <FormLabel className="">Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="**********"
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

              <div className="mt-4 flex flex-wrap justify-between text-xs font-extralight max-xl:-mx-5">
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span className="whitespace-nowrap">an uppercase letter</span>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span className="whitespace-nowrap">a number</span>
                </div>
                <div className="flex items-center">
                  <Checkbox id="terms2" className="mr-2" />
                  <span className="whitespace-nowrap">a symbol</span>
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
                size="lg2"
                variant="golden"
                className="w-full text-2xl xl:!mt-10 xl:text-4xl"
              >
                <span>Create account</span>
              </Button>
            </form>
          </Form>

          <div className="self-start xl:pl-10">
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
