'use server';

import db from '@/app/_lib/db';
import { hashSync } from 'bcrypt-ts';

interface Props {
  name: string;
  email: string;
  password: string;
}

export default async function registerUser({ name, email, password }: Props) {
  if (!(name && email && password)) {
    // throw new Error('Empty field');
    return { success: false, user: null, error: 'Invalid fields' };
  }

  const existingUser = await db.user.findFirst({
    where: { OR: [{ email }, { name }] },
  });

  if (existingUser) {
    // throw new Error('User already exists');
    return { success: false, user: null, error: 'User already exists' };
  }

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashSync(password),
    },
  });

  return { success: true, user: newUser, error: null };
}
