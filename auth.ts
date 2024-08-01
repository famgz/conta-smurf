import db from '@/app/_lib/db';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { compareSync } from 'bcrypt-ts';
import NextAuth, { NextAuthConfig, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

// module augmentation
declare module 'next-auth' {
  interface Session {
    user: User & {
      test?: any;
      id: string;
    };
  }
}

const options: NextAuthConfig = {
  // customize auth routes
  pages: {
    // signIn: '/login',
    // signOut: '/logout',
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      // credentials: {
      //   email: {
      //     label: 'Email',
      //     type: 'email',
      //   },
      //   password: {
      //     label: 'Senha',
      //     type: 'password',
      //   },
      // },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!(email && password)) return null;

        const user = await db.user.findUnique({
          where: { email },
        });

        if (!user) return null;

        const passwordsMatches = compareSync(password, user.password!);

        if (!passwordsMatches) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.test = 'test variable';
      session.user.id = token.id as string;
      return session;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(options);
