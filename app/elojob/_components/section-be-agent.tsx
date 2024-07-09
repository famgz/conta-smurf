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
import { Textarea } from '@/app/_components/ui/textarea';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export default function EloJobBeAgent() {
  const form = useForm();

  return (
    <div className="grid h-full max-w-[1780px] grid-cols-[3fr_2fr] items-center justify-between gap-5 !overflow-visible px-40 pb-14 pt-4">
      {/* Side info */}
      <div className="bg-folder hide-scrollbar mx-auto flex h-full w-full max-w-[573px] flex-col space-y-6 overflow-y-auto rounded-[30px] px-20 py-8">
        <h2 className="text-5xl font-bold">Be an agent</h2>

        <Form {...form}>
          <form
            onSubmit={() => {}}
            className="h-full w-full space-y-5 text-start"
          >
            <FormField
              name="user"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-2xl">Your Name or Nick</FormLabel>
                  <FormControl>
                    <Input placeholder="Gragasthegreat" maxLength={20} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-2xl">Email for contact</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Gragasthegreat@Email.com"
                      maxLength={20}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="reason"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-2xl">
                    Why do you want to be an agent?
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="gamin-story"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-2xl">
                    Tell us your gaming story (League of Legends or Valorant)
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Talk about your ranks, playing time, favorite roles and characters" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="active-side-menu-button h-[54px] w-full text-3xl"
              variant={'secondary'}
            >
              Send
            </Button>
          </form>
        </Form>
      </div>

      {/* Section image */}
      <div className="z-1 relative h-full w-full overflow-hidden rounded-3xl border-2 border-[rgba(8,_112,_184,_0.7)] shadow-[0px_0px_50px_0px_rgba(0,_255,_224,_0.49)]">
        <Image
          src="/images/be-agent.jpg"
          fill
          className="object-cover object-center"
          alt="PC game cartoon character wearing a garment."
        />
      </div>
    </div>
  );
}
``;
