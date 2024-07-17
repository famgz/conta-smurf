'use client';

import { ScrollArea } from '@/app/_components/ui/scroll-area';
import useWindowDimensions from '@/app/_hooks/use-window-dimensions';
import { cn } from '@/app/_lib/utils';
import ChatBox from '@/app/user/_components/chat-box';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface Chat {
  id: string;
  title: string;
  status: 'In progress' | 'Finalized';
  date: string;
  userAvatarImg: string;
}

export default function UserChatSection() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const { width } = useWindowDimensions();
  const isMobile = !!width && width < 640;
  const [isChatBoxModalOpen, setIsChatBoxModalOpen] = useState(false);

  // generate chat data
  useEffect(() => {
    const generatedChats: Chat[] = Array.from({ length: 15 }).map(
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

  useEffect(() => {
    if (!isMobile) {
      setIsChatBoxModalOpen(false);
    }
  }, [isMobile]);

  function handleChatClick(chatIndex: number) {
    setCurrentChatIndex(chatIndex);
    if (isMobile) {
      setIsChatBoxModalOpen(true);
    }
  }

  return (
    <div>
      {currentChat && (
        <div className="relative mx-auto flex h-full w-full overflow-hidden rounded-[30px] xl:grid xl:grid-cols-[4fr_3fr]">
          {/* left column */}
          <div
            className={cn(
              'flex',
              isChatBoxModalOpen
                ? 'absolute z-50 h-full w-full bg-muted'
                : 'max-sm:hidden'
            )}
          >
            <ChatBox
              currentChat={currentChat}
              isModalOpen={isChatBoxModalOpen}
              onCloseModal={() => setIsChatBoxModalOpen(false)}
            />
          </div>

          {/* right column - chat list */}
          <div className="flex h-full flex-1 flex-col gap-5 bg-dark p-5 pt-5 xl:px-10 xl:pb-10">
            <h2 className="text-xl 2xl:text-3xl">All Chats</h2>

            <ScrollArea className="-mr-3 h-[200px] flex-auto pr-5 xl:pr-7">
              <div className="2xl:space-y-3">
                {chats.map((chat, i) => (
                  // chat card
                  <div
                    key={chat.id}
                    className="flex cursor-pointer items-center gap-2 p-2 xl:gap-6"
                    onClick={() => handleChatClick(i)}
                  >
                    <div
                      className={cn(
                        'relative size-10 overflow-hidden rounded-full xl:size-14 2xl:size-24',
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
                          '2xl:text-3xl',
                          chat.id === currentChat.id
                            ? 'font-semibold'
                            : 'font-extralight'
                        )}
                      >
                        {chat.title}
                      </h2>
                      <p className="text-muted-foreground max-2xl:text-xs">
                        {chat.id}
                      </p>
                      <p className="text-muted-foreground max-2xl:text-xs">
                        {chat.status}
                      </p>
                    </div>

                    <span className="text-muted-foreground max-2xl:text-xs">
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
