'use server';

import db from '@/app/_lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

interface Props {
  name: string;
  email: string;
  password: string;
}

// export default async function registerUser(formData: FormData) {
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const password = formData.get('password') as string;
export default async function registerUser({ name, email, password }: Props) {
  if (!(name && email && password)) {
    throw new Error('Os campos devem estar preenchidos');
  }

  const existingUser = await db.user.findFirst({
    where: { OR: [{ email }, { name }] },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password),
    },
  });

  return newUser;
}
