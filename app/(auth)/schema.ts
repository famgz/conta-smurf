import { z } from 'zod';

const requiredMessage = (field: string) => `Required field`;

const passwordMinChars = 3;
const nameMinChars = 3;
const nameMaxChars = 255;

const passwordField = z
  .string()
  .min(
    passwordMinChars,
    `Password must have at least ${passwordMinChars} characters`
  );

const emailField = z
  .string()
  .min(1, requiredMessage('email'))
  .email('Invalid email');

export const userRegisterSchema = z
  .object({
    name: z
      .string()
      .min(1, requiredMessage('nome'))
      .min(nameMinChars, 'Name must have at least ${nameMinChars} characters')
      .max(nameMaxChars, 'Name is too long'),
    email: emailField, // min(1) stands for required
    password: passwordField,
    confirm_password: passwordField,
    terms: z.literal<boolean>(true, {
      errorMap: () => ({ message: 'You must agree with the terms of use*' }),
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Password must match',
    path: ['confirm-password'],
  });

export type UserRegister = z.infer<typeof userRegisterSchema>;

export const userLoginSchema = z.object({
  email: emailField, // min(1) stands for required
  password: passwordField,
});

export type UserLogin = z.infer<typeof userLoginSchema>;
