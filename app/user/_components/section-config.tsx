'use client';

import DeleteButton from '@/app/_components/buttons/delete-button';
import ChampionIcon from '@/app/_components/icons/champion';
import LaneIcon from '@/app/_components/icons/lane';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Input } from '@/app/_components/ui/input';
import { Separator } from '@/app/_components/ui/separator';
import { Textarea } from '@/app/_components/ui/textarea';
import useWindowDimensions from '@/app/_hooks/use-window-dimensions';
import { cn } from '@/app/_lib/utils';
import { Champion, champions } from '@/app/_types/order/champion';
import { Lane, lanes } from '@/app/_types/order/lane';
import Loading from '@/app/loading';
import { ChevronLeftIcon, UploadIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Fragment, useEffect, useState } from 'react';

export default function UserConfigSection() {
  const { data, status } = useSession();
  const user = data?.user;

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const { width } = useWindowDimensions();
  const isMobile = !!width && width < 640;
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setIsConfigModalOpen(false);
    }
  }, [isMobile]);

  function handleChatClick(index: number) {
    setCurrentTabIndex(index);
    if (isMobile) {
      setIsConfigModalOpen(true);
    }
  }

  if (!user) {
    return <Loading />;
  }

  const configTabs = [
    // Account
    {
      title: 'Account',
      content: (
        <div className="space-y-10 text-left font-light">
          <div className="flex flex-col">
            <div className="flex justify-between text-left xl:text-xl">
              <p>User Name</p>
              <Button
                variant={'link'}
                className="text-xs text-muted-foreground"
              >
                Change username
              </Button>
            </div>
            <p className="text-muted-foreground">{user.name}</p>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex justify-between xl:text-xl">
              <p>Your League Accounts</p>
              <Button
                variant={'link'}
                className="text-xs text-muted-foreground"
              >
                + Add Account
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              Gragasfofinho#BR1 <DeleteButton />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              MonoVayne5estrelas#VAYNE <DeleteButton />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex justify-between xl:text-xl">
              <p>Your Valorant Accounts</p>

              <Button
                variant={'link'}
                className="text-xs text-muted-foreground"
              >
                + Add Account
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              MonoJETT#BR1
              <DeleteButton />
            </div>
          </div>
        </div>
      ),
    },
    // Email and Password
    {
      title: 'Email and Password',
      content: (
        <div className="space-y-10 text-left font-light">
          <div className="xl:text-xl">
            <p>Email</p>
            <p className="text-muted-foreground">{user.email}</p>
          </div>

          <div>
            <div className="flex justify-between xl:text-xl">
              <p>Password</p>
              <Button
                variant={'link'}
                className="text-xs text-muted-foreground"
              >
                Change Password
              </Button>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              ************
            </div>
          </div>
        </div>
      ),
    },
    // Duo.gg account
    {
      title: 'Duo.gg account',
      content: (
        <div className="flex h-full max-w-[700px] flex-col space-y-3 text-left font-light">
          <div className="flex flex-col space-y-1">
            <span className="text-left font-light xl:text-xl">
              Escolha um subtitulo:
            </span>
            <div className="flex">
              <Input
                type="text"
                name="duo-subtitle"
                placeholder="Your next love"
                className="flex-1 rounded-sm bg-white px-4 font-light text-muted placeholder-muted-foreground outline-none xl:h-11 xl:text-xl"
              />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-left font-light xl:text-xl">
              Escolha as Rotas/classes, personagens e jogo que você gosta de
              jogar
            </span>
            <div className="hide-scrollbar flex gap-3 overflow-x-auto">
              <div className="flex items-center gap-3">
                {Object.keys(lanes).map((lane) => (
                  <LaneIcon
                    lane={lane as Lane}
                    key={lane}
                    imageSize={30}
                    className="cursor-pointer"
                  />
                ))}
                {Object.keys(champions).map((champion) => (
                  <ChampionIcon
                    champion={champion as Champion}
                    key={champion}
                    imageSize={42}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col space-y-1">
            <span className="text-left font-light xl:text-xl">
              Escreva sua biografia (máximo 256 caracteres)
            </span>
            <Textarea
              name="duo-bio"
              placeholder="Describe your bio"
              className="flex-1 rounded-sm bg-white px-4 py-2 font-light text-muted placeholder-muted-foreground outline-none xl:text-xl"
            ></Textarea>
          </div>

          <div className="space-y-1">
            <span className="text-left font-light xl:text-xl">
              Monte o carrossel com fotos
            </span>
            <div className="hide-scrollbar flex items-center gap-3 overflow-x-auto">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  className="flex-center size-12 shrink-0 cursor-pointer rounded-md bg-folder hover:opacity-70 sm:size-14 xl:size-20"
                  key={i}
                >
                  <UploadIcon className="size-4 sm:size-6" />
                </div>
              ))}
            </div>
          </div>

          <div className="!mt-6 flex justify-between">
            <Button variant={'dark'} className="text-md rounded-lg">
              Cancelar
            </Button>

            <Button variant={'dark'} className="rounded-lg px-6 xl:text-xl">
              Salvar mudanças
            </Button>
          </div>
        </div>
      ),
    },
    // 2 Factor Verification
    {
      title: '2 Factor Verification',
      content: (
        <div className="space-y-10 font-light">
          <div className="flex items-center justify-between">
            <div className="text-left 2xl:text-xl">
              <p>2-step Verification Status:</p>
              <p className="text-muted-foreground">Disabled</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left 2xl:text-xl">
              <p>Verified email:</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                No
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-6">
            <input
              type="text"
              name="verification-code"
              placeholder="Verification Code:"
              className="h-11 w-48 rounded-sm bg-white px-4 font-light text-muted placeholder-muted-foreground outline-none 2xl:text-xl"
            />
            <Button variant={'dark'} className="h-12 2xl:text-3xl">
              Send verification code
            </Button>
          </div>

          <div className="flex flex-col items-start gap-6">
            <Button variant={'dark'} className="h-12 2xl:text-3xl">
              Enable 2-step Verification
            </Button>
            <p className="text-justify text-muted-foreground max-2xl:leading-4 max-sm:text-xs">
              Texto explicando que a verificação de 2 etapas é feita apartir do
              email cadastrado que quando logar sera requisitado um codigo
              enviado por email ....la bla bla Lörem ipsum ninde sperefel vanar
              fastän ofang kroda inte telell. Sehena hexanade, pren rerat, och
              olig såsom nätvandra. Föliligen suk dösonyss för att religen de
              orik megande att bektigt.
            </p>
          </div>
        </div>
      ),
    },
    // Privacy and Notifications
    {
      title: 'Privacy and Notifications',
      content: (
        <div className="space-y-10 font-light">
          <div className="space-y-1 text-left 2xl:text-xl">
            <p>E-mail Notifications</p>
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-xs">Disabled</p>
            </div>
          </div>

          <div className="space-y-1 text-left 2xl:text-xl">
            <p>E-mail Promotions</p>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked={true} />
              <p className="text-xs">Enabled</p>
            </div>
          </div>

          <p className="text-justify text-muted-foreground max-2xl:leading-4 max-sm:text-xs">
            Texto explicando como as notificações por email sao importanteses
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren reat, och olig såsom nätvandra. Föliligen suk
            dösonyss för att religen de orik megande att bektigt, pren reat, och
            olig såsom nätvandra. Föliligen suk dösonyss för att religen de orik
            megande att bektigt.
          </p>

          <p className="text-justify text-muted-foreground max-2xl:leading-4 max-sm:text-xs">
            Texto explicando como as notificações por email sao importanteses
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren reat, och olig såsom nätvandra. Föliligen suk
            dösonyss för att religen de orik megande att bektigt, pren reat, och
            olig såsom nätvandra. Föliligen suk dösonyss för att religen de orik
            megande att bektigt.
          </p>
        </div>
      ),
    },
    // Help Center
    {
      title: 'Help Center',
      content: (
        <div className="flex h-full max-w-[700px] flex-col space-y-3 text-left font-light">
          <div className="space-y-1">
            <span className="text-left font-light 2xl:text-xl">
              Your Name or Nick
            </span>
            <input
              type="text"
              name="help-name"
              placeholder="Gragasthegreat"
              className="h-11 w-full rounded-sm bg-white px-4 font-light text-muted placeholder-muted-foreground outline-none 2xl:text-xl"
            />
          </div>

          <div className="space-y-1">
            <span className="text-left font-light 2xl:text-xl">
              What type of help you need?
            </span>
            <input
              type="text"
              name="help-problem"
              placeholder="Describe your problem"
              className="h-11 w-full rounded-sm bg-white px-4 font-light text-muted placeholder-muted-foreground outline-none 2xl:text-xl"
            />
          </div>

          <div className="flex flex-1 flex-col space-y-1">
            <span className="text-left font-light 2xl:text-xl">
              What type of help you need?
            </span>
            <textarea
              name="help-description"
              placeholder="Describe your problem"
              className="w-full flex-1 rounded-sm bg-white px-4 py-2 font-light text-muted placeholder-muted-foreground outline-none 2xl:text-xl"
            ></textarea>
            <div className="flex items-center gap-2 font-extralight">
              <UploadIcon className="size-4" /> attach photos or pdfs (max
              600kbs)
            </div>
          </div>
          <Button variant={'dark'} className="w-full 2xl:text-2xl">
            Send
          </Button>
        </div>
      ),
    },
  ];
  const currentTab = configTabs[currentTabIndex];

  return (
    <div className="relative flex h-full w-full !max-w-[1260px] overflow-hidden rounded-[30px] xl:grid xl:grid-cols-[1fr_2fr]">
      {/* left column - menu */}
      <div className="flex flex-1 flex-col gap-2 bg-dark p-5 max-xl:max-w-fit max-sm:max-w-full xl:p-8 2xl:gap-8 2xl:p-10">
        <h2 className="text-left text-2xl font-semibold 2xl:text-3xl">
          Config
        </h2>

        <div className="flex flex-1 flex-col">
          {configTabs.map((tab, i, a) => (
            <Fragment key={tab.title}>
              <div
                className={cn(
                  'flex w-full cursor-pointer items-center whitespace-nowrap py-2 hover:font-medium sm:text-lg xl:py-4 2xl:text-2xl',
                  i === currentTabIndex ? 'font-medium' : 'font-extralight'
                )}
                onClick={() => handleChatClick(i)}
              >
                {tab.title}
              </div>
              {i < a.length - 1 && <Separator />}
            </Fragment>
          ))}
        </div>
      </div>

      {/* right column details */}
      <div
        className={cn(
          'flex w-full flex-col bg-light',
          isConfigModalOpen
            ? 'absolute z-50 h-full w-full bg-[#9a9a9a]'
            : 'max-sm:hidden'
        )}
      >
        {/* header */}
        <div className="flex items-center bg-tab-header p-5 text-left sm:gap-6 xl:p-8 2xl:p-10">
          {isConfigModalOpen && (
            <Button
              className="flex-center size-8 shrink-0 rounded-full bg-light p-0 text-muted"
              onClick={() => setIsConfigModalOpen(false)}
            >
              <ChevronLeftIcon strokeWidth={3} />
            </Button>
          )}
          <h2 className="w-full text-lg font-semibold max-sm:text-center sm:text-2xl 2xl:text-4xl">
            {currentTab.title}
          </h2>
        </div>

        {/* body - current tab display */}
        <div
          className={cn(
            'flex h-[200px] flex-auto p-5 xl:p-8 2xl:p-10',
            isConfigModalOpen && 'bg-dark'
          )}
        >
          <div className="hide-scrollbar flex-auto overflow-y-auto overflow-x-hidden">
            {currentTab.content}
          </div>
        </div>
      </div>
    </div>
  );
}
