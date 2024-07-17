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
import { useForm } from 'react-hook-form';

export default function EloJobBeAgentSection() {
  const form = useForm();

  return (
    <div className="relative flex h-full flex-col-reverse items-center justify-center gap-3 !overflow-visible sm:gap-5 xl:grid xl:grid-cols-2 xl:justify-between 2xl:px-40">
      {/* Side info */}
      <div className="hide-scrollbar mx-auto flex h-full w-full max-w-[400px] flex-col gap-3 overflow-y-auto rounded-[30px] bg-folder px-10 py-6 2xl:max-w-[573px] 2xl:gap-6 2xl:px-20 2xl:py-8">
        <h2 className="text-3xl font-bold 2xl:text-5xl">Be an agent</h2>

        <Form {...form}>
          <form
            onSubmit={() => {}}
            className="flex h-full w-full flex-1 flex-col gap-2 text-start 2xl:gap-4"
          >
            <FormField
              name="user"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="">Your Name or Nick</FormLabel>
                  <Input placeholder="Gragasthegreat" maxLength={20} />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="">Email for contact</FormLabel>
                  <Input
                    placeholder="Gragasthegreat@Email.com"
                    maxLength={20}
                    type="email"
                  />
                </FormItem>
              )}
            />

            <FormField
              name="reason"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-2">
                  <FormLabel className="">
                    Why do you want to be an agent?
                  </FormLabel>
                  <textarea
                    className="w-full flex-1 rounded-md p-2 text-sm text-muted 2xl:text-lg"
                    placeholder="Talk about your ranks, playing time, favorite roles and characters"
                  />
                </FormItem>
              )}
            />

            <FormField
              name="gamin-story"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-2">
                  <FormLabel className="">
                    Tell us your gaming story (League of Legends or Valorant)
                  </FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full flex-1 rounded-md p-2 text-sm text-muted 2xl:text-lg"
                      placeholder="Talk about your ranks, playing time, favorite roles and characters"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="active-side-menu-button mt-3 w-full text-xl hover:shadow-[0px_0px_20px_0px_rgba(0,_255,_224,_0.49)] xl:h-[54px] xl:text-3xl"
              variant={'secondary'}
            >
              Send
            </Button>
          </form>
        </Form>
      </div>

      {/* Section image */}
      <div className="z-1 relative top-0 h-full w-full max-w-[600px] overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[0px_0px_50px_0px_rgba(0,_255,_224,_0.49)] max-lg:max-h-[200px] max-md:max-h-[120px]">
        <Image
          src="/images/be-agent.jpg"
          fill
          className="object-cover object-top"
          alt="PC game cartoon character wearing a garment."
        />
      </div>
    </div>
  );
}
