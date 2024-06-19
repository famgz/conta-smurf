import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="space-y-20 bg-[#050024] px-20 pb-8 pt-20 font-light">
      <div className="mx-auto flex max-w-[1920px]">
        <Link href={'/'}>
          <Image
            src="/images/logo.png"
            width={202}
            height={187}
            className=""
            alt="Logo image"
          />
        </Link>
        <div className="flex flex-1 justify-around">
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

      <div className="mx-auto max-w-[1070px]">
        <div className="px-16">
          ContaSmurf não é endossado pela Riot Games e não reflete os pontos de
          vista ou opiniões da Riot Games ou de qualquer pessoa oficialmente
          envolvida na produção ou gerenciamento de League of Legends. League of
          Legends e Riot Games são marcas comerciais ou marcas registradas da
          Riot Games, Inc. League of Legends © Riot Games, Inc.
        </div>
        <div className="bg-line-gradient mb-4 mt-9 h-[2px]"></div>
        <p className="text-center text-2xl">Copyright © 2024</p>
      </div>
    </footer>
  );
}
