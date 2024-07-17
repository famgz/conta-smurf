'use client';

import ExclamationIcon from '@/app/_components/icons/exclamation';
import RightArrow from '@/app/_components/icons/right-arrow';
import { Button } from '@/app/_components/ui/button';
import { ScrollArea } from '@/app/_components/ui/scroll-area';
import { chatMessageExample } from '@/app/user/_components/chat-example';
import ChatMessageBalloon, {
  ChatMessageBalloonProps,
} from '@/app/user/_components/chat-message-balloon';
import { Chat } from '@/app/user/_components/section-chat';
import { ChevronLeftIcon, SmileIcon } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ChatBoxProps {
  currentChat: Chat;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export default function ChatBox({
  currentChat,
  isModalOpen,
  onCloseModal,
}: ChatBoxProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] =
    useState<ChatMessageBalloonProps[]>(chatMessageExample);

  // ensure chat box will always scroll to bottom when updated
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
    <div className="flex w-full flex-col bg-light">
      {/* header */}
      <div className="flex items-center gap-6 bg-tab-header px-5 py-3 2xl:px-9">
        {/* close modal button */}
        {isModalOpen && (
          <Button
            className="flex-center size-8 shrink-0 rounded-full bg-light p-0 text-muted"
            onClick={onCloseModal}
          >
            <ChevronLeftIcon strokeWidth={3} />
          </Button>
        )}
        <div className="xl:size-18 relative size-14 overflow-hidden rounded-full 2xl:size-24">
          <Image
            src={currentChat.userAvatarImg}
            alt="Booster profile image"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex-1 text-left">
          <h2 className="text-xl 2xl:text-3xl">{currentChat.title}</h2>
          <span className="text-muted-foreground max-2xl:text-sm">
            {currentChat.id}
          </span>
        </div>

        <Button className="flex-center size-8 rounded-lg bg-white p-0 2xl:size-12 2xl:rounded-2xl">
          <ExclamationIcon className="size-5 fill-muted 2xl:size-8" />
        </Button>
      </div>

      {/* body - current chat messages */}
      <div className="flex flex-1 flex-col gap-4 p-4 xl:p-8">
        <ScrollArea
          ref={scrollRef}
          className="h-[200px] flex-auto pr-5 max-xl:-mr-3 xl:pr-5"
        >
          <div className="flex flex-col gap-3">
            {messages.map((message, i) => (
              <ChatMessageBalloon {...message} key={i} />
            ))}
          </div>
        </ScrollArea>

        {/* message input */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 flex-1 items-center rounded-sm bg-white pl-4">
            <input
              type="text"
              name="message"
              placeholder="Write a message to +user"
              value={newMessage}
              onChange={handleNewMessageChange}
              className="w-4 flex-1 bg-transparent font-light text-muted placeholder-muted-foreground outline-none"
            />
            <Button className="bg-transparent text-muted-foreground hover:bg-transparent hover:text-muted">
              <SmileIcon className="size-5" />
            </Button>
          </div>

          {/* send button */}
          <Button
            className="flex-center h-10 w-20 rounded-lg bg-yellow hover:brightness-110 xl:w-32"
            onClick={addNewMessage}
          >
            <RightArrow className="size-6 xl:size-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
