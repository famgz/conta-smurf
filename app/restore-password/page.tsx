'use client';

import { Button } from '@/app/_components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/_components/ui/form';
import { Input } from '@/app/_components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

export default function RestorePasswordPage() {
  const form = useForm();
  const router = useRouter();

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    router.push('/login');
  }

  return (
    <div className="page-section !px-0 max-xl:!pb-5">
      <div className="flex h-full w-full flex-col items-center justify-center pb-5 max-xl:gap-4 xl:grid xl:max-w-[1780px] xl:grid-cols-2 xl:px-[70px] xl:pb-10 xl:pt-3">
        <h1 className="whitespace-wrap text-5xl font-bold xl:hidden">
          Restore Password
        </h1>

        {/* Section image */}
        <div className="relative h-[300px] w-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[2px_10px_30px_rgba(8,_112,_184,_0.7)] max-xl:-mx-5 xl:h-full">
          <Image
            src="/images/restore-password.jpg"
            fill
            className="object-cover object-left"
            alt="PC game cartoon character"
          />
        </div>

        {/* Form */}
        <div className="flex-center mx-auto w-full max-w-[280px] flex-col xl:max-w-[427px]">
          <h1 className="mb-6 text-6xl font-bold max-xl:hidden">
            Restore Password
          </h1>
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
                name="confirm-email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Confirm Email</FormLabel>
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

              <Button
                type="submit"
                size="xl"
                variant="golden"
                className="!xl:mt-20 !mt-10 w-full text-2xl xl:text-4xl"
              >
                <span>Send Email</span>
              </Button>
            </form>
          </Form>

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
        </div>
      </div>
    </div>
  );
}
