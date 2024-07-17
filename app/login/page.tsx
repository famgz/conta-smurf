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
    router.push('/user');
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
                    <Button
                      type="button"
                      variant={'link'}
                      size={'sm'}
                      className="!m-0 p-0 text-xs font-extralight"
                      asChild
                    >
                      <Link href="restore-password">Forget your password?</Link>
                    </Button>
                  </FormItem>
                )}
              />

              <div className="mt-10 flex items-center xl:mt-20">
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
                className="mt-4 w-full text-4xl xl:text-6xl"
              >
                <span>Login</span>
              </Button>
            </form>
          </Form>

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
