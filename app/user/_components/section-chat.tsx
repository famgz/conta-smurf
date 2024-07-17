'use client';

import ExclamationIcon from '@/app/_components/icons/exclamation';
import RightArrow from '@/app/_components/icons/right-arrow';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { cn } from '@/app/_lib/utils';
import { chatMessageExample } from '@/app/user/_components/chat-example';
import ChatMessageBalloon, {
  ChatMessageBalloonProps,
} from '@/app/user/_components/chat-message-balloon';
import { SmileIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export interface Chat {
  id: string;
  title: string;
  status: 'In progress' | 'Finalized';
  date: string;
  userAvatarImg: string;
}

export default function UserChatSection() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] =
    useState<ChatMessageBalloonProps[]>(chatMessageExample);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);

  // generate chat data
  useEffect(() => {
    const generatedChats: Chat[] = Array.from({ length: 12 }).map(
      (_, i, arr) => {
        const id = String(arr.length - i).padStart(2, '0');
        return {
          id: `#203130${id}`,
          title: `Booster12${id}`,
          status: Math.random() < 0.5 ? 'In progress' : 'Finalized',
          date: '22/05/2024',
          userAvatarImg:
            Math.random() < 0.5
              ? '/images/profile.jpg'
              : '/images/booster-profile.jpg',
        };
      }
    );
    setChats(generatedChats);
  }, []);

  const currentChat: Chat = chats[currentChatIndex];

  // ensure chat box will always scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
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
    <div className="">
      {currentChat && (
        <div className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-[30px] xl:grid xl:grid-cols-[4fr_3fr]">
          {/* left column */}
          <div className="flex flex-col bg-light max-xl:hidden">
            {/* header */}
            <div className="flex h-32 items-center gap-6 bg-tab-header px-9 py-3">
              <div className="relative size-24 overflow-hidden rounded-full">
                <Image
                  src={currentChat.userAvatarImg}
                  alt="Booster profile image"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex-1 text-left">
                <h2 className="text-3xl">{currentChat.title}</h2>
                <span className="text-muted-foreground">{currentChat.id}</span>
              </div>

              <Button className="flex-center size-12 rounded-2xl bg-white p-0">
                <ExclamationIcon className="fill-muted" />
              </Button>
            </div>

            {/* current chat messages */}
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

          {/* right column - chat list */}
          <div className="flex h-full flex-col gap-5 bg-dark px-10 pb-10 pt-5">
            <h2 className="text-3xl">All Chats</h2>

            <ScrollArea className="-mr-3 h-[300px] flex-auto pr-7">
              <div className="xl:space-y-3">
                {chats.map((chat, i) => (
                  <div
                    key={chat.id}
                    className="flex cursor-pointer items-center gap-6 p-2"
                    onClick={() => setCurrentChatIndex(i)}
                  >
                    <div
                      className={cn(
                        'relative size-16 overflow-hidden rounded-full xl:size-24',
                        chat.id === currentChat.id && 'shadow-blue'
                      )}
                    >
                      <Image
                        src={chat.userAvatarImg}
                        alt="profile image"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 text-left">
                      <h2
                        className={cn(
                          'xl:text-3xl',
                          chat.id === currentChat.id
                            ? 'font-semibold'
                            : 'font-extralight'
                        )}
                      >
                        {chat.title}
                      </h2>
                      <p className="text-muted-foreground max-xl:text-xs">
                        {chat.id}
                      </p>
                      <p className="text-muted-foreground max-xl:text-xs">
                        {chat.status}
                      </p>
                    </div>

                    <span className="text-muted-foreground max-xl:text-xs">
                      22/05/2024
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}
