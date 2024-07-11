'use client';

import ExclamationIcon from '@/app/_components/icons/exclamation';
import RightArrow from '@/app/_components/icons/right-arrow';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { chatMessageExample } from '@/app/user/_components/chat-example';
import ChatMessageBalloon, {
  ChatMessageBalloonProps,
} from '@/app/user/_components/chat-message-balloon';
import { SmileIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function UserChatSection() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] =
    useState<ChatMessageBalloonProps[]>(chatMessageExample);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ensure chat box will always scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    console.log(scrollRef);
  }, [messages]);

  function handleNewMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewMessage(event.target.value);
  }

  function addNewMessage() {
    if (!newMessage) {
      return;
    }
    const currentDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    });

    setMessages((prev) => [
      ...prev,
      {
        message: newMessage,
        date: currentDate,
        position: 'right',
      },
    ]);
    setNewMessage('');
  }

  return (
    <div className="!max-w-[1530px] py-12">
      <div className="mx-auto grid h-full w-full grid-cols-[4fr_3fr] overflow-hidden rounded-[30px]">
        {/* left column */}
        <div className="flex flex-col bg-light">
          {/* header */}
          <div className="flex h-32 items-center gap-6 bg-tab-header px-9 py-3">
            <div className="relative size-24 overflow-hidden rounded-full">
              <Image
                src="/images/booster-profile.jpg"
                alt="Booster profile image"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1 text-left">
              <h2 className="text-3xl">Booster1203</h2>
              <span className="text-muted-foreground">#203130123</span>
            </div>

            <Button className="flex-center size-12 rounded-2xl bg-white p-0">
              <ExclamationIcon className="fill-muted" />
            </Button>
          </div>

          {/* current chat */}
          <div className="flex flex-1 flex-col gap-4 p-8">
            <ScrollArea ref={scrollRef} className="h-[300px] flex-auto pr-5">
              <div className="flex flex-col gap-3">
                {messages.map((message, i) => (
                  <ChatMessageBalloon {...message} key={i} />
                ))}
              </div>
            </ScrollArea>

            {/* message input */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 flex-1 items-center gap-4 rounded-sm bg-white pl-4">
                <input
                  type="text"
                  name="message"
                  placeholder="Write a message to +user"
                  value={newMessage}
                  onChange={handleNewMessageChange}
                  className="flex-1 bg-transparent font-light text-muted placeholder-muted-foreground outline-none"
                />
                <Button className="bg-transparent text-muted-foreground hover:bg-transparent hover:text-muted">
                  <SmileIcon className="size-5" />
                </Button>
              </div>
              {/* send button */}
              <Button
                className="flex-center h-10 w-32 rounded-lg bg-yellow hover:brightness-110"
                onClick={addNewMessage}
              >
                <RightArrow />
              </Button>
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-5 bg-dark px-10 pb-10 pt-5">
          <h2 className="text-3xl">All Chats</h2>

          <ScrollArea className="-mr-3 h-[300px] flex-auto pr-7">
            {Array.from({ length: 12 }).map((_, i, a) => (
              <div
                className="flex h-32 cursor-pointer items-center gap-6"
                key={i}
              >
                <div className="relative size-24 overflow-hidden rounded-full">
                  <Image
                    src="/images/profile.jpg"
                    alt="Booster profile image"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex-1 text-left">
                  <h2 className="text-3xl">{`Booster12${String(a.length - i).padStart(2, '0')}`}</h2>
                  <p className="text-muted-foreground">#203130123</p>
                  <p className="text-muted-foreground">Finalized</p>
                </div>

                <span className="mb-14 text-muted-foreground">22/05/2024</span>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
