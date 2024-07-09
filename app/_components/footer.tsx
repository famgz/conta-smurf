import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex min-h-screen flex-col space-y-12 bg-[#050024] px-9 pb-8 pt-12 font-light xl:block xl:h-fit xl:min-h-fit xl:space-y-20 xl:px-20 xl:pt-20">
      <div className="flex max-w-[1920px] flex-1 flex-col space-y-7 xl:mx-auto xl:flex-row xl:space-y-0">
        <Link
          href={'/'}
          className="relative h-[100px] w-[110px] xl:h-[186px] xl:w-[200px]"
        >
          <Image
            src="/images/logo.png"
            fill
            className="object-cover"
            alt="Logo image"
          />
        </Link>
        <div className="grid grid-cols-2 gap-10 xl:flex xl:flex-1 xl:justify-around xl:gap-0">
          <div className="footer-links-section">
            <h3>Navegação:</h3>
            <p className="font-light">Contas</p>
            <p>Elojob</p>
            <p>Serviço</p>
            <p>Lootbox</p>
          </div>

          <div className="footer-links-section">
            <h3>Sua conta:</h3>
            <p>Perfil</p>
            <p>Histórico de Compras</p>
            <p>Notificações</p>
            <p>Mensagens</p>
            <p>Gerenciar conta</p>
          </div>

          <div className="footer-links-section">
            <h3>Produtos:</h3>
            <p>Contas</p>
            <p>Elojob</p>
            <p>Lootbox</p>
            <p>Coach</p>
            <p>Presentes</p>
          </div>

          <div className="footer-links-section">
            <h3>Redes:</h3>
            <p>Discord</p>
            <p>Twitter/X</p>
            <p>Instagram</p>
            <p>Tiktok</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>

      <div className="mx-auto xl:max-w-[1070px]">
        <div className="text-justify xl:px-16 xl:text-start">
          ContaSmurf não é endossado pela Riot Games e não reflete os pontos de
          vista ou opiniões da Riot Games ou de qualquer pessoa oficialmente
          envolvida na produção ou gerenciamento de League of Legends. League of
          Legends e Riot Games são marcas comerciais ou marcas registradas da
          Riot Games, Inc. League of Legends © Riot Games, Inc.
        </div>
        <div className="mx-auto mb-4 mt-9 h-[2px] max-w-[253px] bg-line-gradient xl:max-w-none"></div>
        <p className="text-center text-2xl">Copyright © 2024</p>
      </div>
    </footer>
  );
}
