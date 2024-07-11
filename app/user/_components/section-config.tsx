'use client';

import DeleteButton from '@/app/_components/buttons/delete-button';
import ChampionIcon from '@/app/_components/icons/champion';
import LaneIcon from '@/app/_components/icons/lane';
import { Button } from '@/app/_components/ui/button';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Separator } from '@/app/_components/ui/separator';
import { cn } from '@/app/_lib/utils';
import { Champion, champions } from '@/app/_types/order/champion';
import { Lane, lanes } from '@/app/_types/order/lane';
import { UploadIcon } from 'lucide-react';
import { useState } from 'react';

export default function UserConfigSection() {
  const configTabs = [
    {
      title: 'Account',
      content: (
        <div className="space-y-10 font-light">
          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>User Name</p>
              <p className="text-muted-foreground">Gragasfofinho</p>
            </div>
            <Button variant={'link'} className="text-xs text-muted-foreground">
              Change username
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>Your League Accounts</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                Gragasfofinho#BR1 <DeleteButton />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                MonoVayne5estrelas#VAYNE <DeleteButton />
              </div>
            </div>
            <Button variant={'link'} className="text-xs text-muted-foreground">
              + Add Account
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>Your Valorant Accounts</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                MonoJETT#BR1
                <DeleteButton />
              </div>
            </div>
            <Button variant={'link'} className="text-xs text-muted-foreground">
              + Add Account
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Email and Password',
      content: (
        <div className="space-y-10 font-light">
          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>Email</p>
              <p className="text-muted-foreground">Gragasfofinho@email.com</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>Password</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                ************
              </div>
            </div>
            <Button variant={'link'} className="text-xs text-muted-foreground">
              Change Password
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Duo.gg account',
      content: (
        <div className="flex h-full max-w-[700px] flex-col space-y-3 text-left font-light">
          <div className="space-y-1">
            <span className="text-left text-xl font-light">
              Escolha um subtitulo:
            </span>
            <input
              type="text"
              name="duo-subtitle"
              placeholder="Your nex love"
              className="h-11 w-full rounded-sm bg-white px-4 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            />
          </div>

          <div className="space-y-1">
            <span className="text-left text-xl font-light">
              Escolha as Rotas/classes, personagens e jogo que você gosta de
              jogar
            </span>
            <div className="flex gap-3">
              <div className="flex items-center gap-3">
                {Object.keys(lanes).map((lane) => (
                  <LaneIcon
                    lane={lane as Lane}
                    key={lane}
                    imageSize={30}
                    className="cursor-pointer"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
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
            <span className="text-left text-xl font-light">
              Escreva sua biografia (máximo 256 caracteres)
            </span>
            <textarea
              name="duo-bio"
              placeholder="Describe your bio"
              className="w-full flex-1 rounded-sm bg-white px-4 py-2 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            ></textarea>
          </div>

          <div className="space-y-1">
            <span className="text-left text-xl font-light">
              Monte o carrossel com fotos
            </span>
            <div className="flex items-center gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  className="flex-center size-20 cursor-pointer rounded-md bg-folder hover:opacity-70"
                  key={i}
                >
                  <UploadIcon />
                </div>
              ))}
            </div>
          </div>

          <div className="!mt-6 flex justify-between">
            <Button variant={'dark'} className="text-md">
              Cancelar
            </Button>

            <Button variant={'dark'} className="text-2xl">
              Salvar mudanças
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: '2 Factor Verification',
      content: (
        <div className="space-y-10 font-light">
          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>2-step Verification Status:</p>
              <p className="text-muted-foreground">Disabled</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-left text-xl">
              <p>Verified email:</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                No
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <input
              type="text"
              name="verification-code"
              placeholder="Verification Code:"
              className="h-11 w-48 rounded-sm bg-white px-4 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            />
            <Button variant={'dark'} className="h-12 text-3xl">
              Send verification code
            </Button>
          </div>

          <div className="flex flex-col items-start gap-6">
            <Button variant={'dark'} className="h-12 text-3xl">
              Enable 2-step Verification
            </Button>
            <p className="text-justify text-muted-foreground">
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
    {
      title: 'Privacy and Notifications',
      content: (
        <div className="space-y-10 font-light">
          <div className="space-y-1 text-left text-xl">
            <p>E-mail Notifications</p>
            <div className="flex items-center gap-2">
              <Checkbox />
              <p className="text-xs">Disabled</p>
            </div>
          </div>

          <div className="space-y-1 text-left text-xl">
            <p>E-mail Promotions</p>
            <div className="flex items-center gap-2">
              <Checkbox defaultChecked={true} />
              <p className="text-xs">Enabled</p>
            </div>
          </div>

          <p className="text-justify text-muted-foreground">
            Texto explicando como as notificações por email sao importanteses
            Lörem ipsum ninde sperefel vanar fastän ofang kroda inte telell.
            Sehena hexanade, pren reat, och olig såsom nätvandra. Föliligen suk
            dösonyss för att religen de orik megande att bektigt, pren reat, och
            olig såsom nätvandra. Föliligen suk dösonyss för att religen de orik
            megande att bektigt.
          </p>

          <p className="text-justify text-muted-foreground">
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
    {
      title: 'Help Center',
      content: (
        <div className="flex h-full max-w-[700px] flex-col space-y-3 text-left font-light">
          <div className="space-y-1">
            <span className="text-left text-xl font-light">
              Your Name or Nick
            </span>
            <input
              type="text"
              name="help-name"
              placeholder="Gragasthegreat"
              className="h-11 w-full rounded-sm bg-white px-4 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            />
          </div>

          <div className="space-y-1">
            <span className="text-left text-xl font-light">
              What type of help you need?
            </span>
            <input
              type="text"
              name="help-problem"
              placeholder="Describe your problem"
              className="h-11 w-full rounded-sm bg-white px-4 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            />
          </div>

          <div className="flex flex-1 flex-col space-y-1">
            <span className="text-left text-xl font-light">
              What type of help you need?
            </span>
            <textarea
              name="help-description"
              placeholder="Describe your problem"
              className="w-full flex-1 rounded-sm bg-white px-4 py-2 text-xl font-light text-muted placeholder-muted-foreground outline-none"
            ></textarea>
            <div className="flex items-center gap-2 font-extralight">
              <UploadIcon className="size-4" /> attach photos or pdfs (max
              600kbs)
            </div>
          </div>
          <Button variant={'dark'} className="w-full text-2xl">
            Send
          </Button>
        </div>
      ),
    },
  ];
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const currentTab = configTabs[currentTabIndex];

  console.log(currentTabIndex);

  return (
    <div className="!max-w-[1260px] py-12">
      <div className="grid h-full grid-cols-[1fr_2fr] overflow-hidden rounded-[30px]">
        {/* left column - menu */}
        <div className="flex flex-col gap-8 bg-dark p-10">
          <h2 className="text-left text-3xl font-semibold">Config</h2>

          <div className="flex flex-1 flex-col">
            {configTabs.map((tab, i, a) => (
              <>
                <div
                  className={cn(
                    'flex w-full cursor-pointer items-center whitespace-nowrap py-4 text-2xl hover:font-medium',
                    i === currentTabIndex ? 'font-medium' : 'font-extralight'
                  )}
                  onClick={() => setCurrentTabIndex(i)}
                >
                  {tab.title}
                </div>
                {i < a.length - 1 && <Separator />}
              </>
            ))}
          </div>
        </div>

        {/* right column details */}
        <div className="flex flex-col bg-light">
          {/* header */}
          <div className="flex h-32 items-center gap-6 bg-tab-header px-9 py-3">
            <h2 className="text-4xl font-semibold">{currentTab.title}</h2>
          </div>

          {/* current tab display */}
          <div className="flex-1 p-10 pr-16">{currentTab.content}</div>
        </div>
      </div>
    </div>
  );
}
