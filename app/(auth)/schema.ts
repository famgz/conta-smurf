import { z } from 'zod';

const requiredMessage = (field: string) => `Required field`;

const passwordMinChars = 3;
const nameMinChars = 3;
const nameMaxChars = 255;

const passwordField = z
  .string()
  .min(1, requiredMessage('password'))
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
      .min(1, requiredMessage('name'))
      .min(nameMinChars, 'Name must have at least ${nameMinChars} characters')
      .max(nameMaxChars, 'Name is too long'),
    email: emailField,
    password: passwordField,
    confirm_password: passwordField,
    terms: z.literal<boolean>(true, {
      errorMap: () => ({ message: 'You must agree with the terms of use*' }),
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords must match',
    path: ['confirm_password'],
  });

export const userLoginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const restorePasswordSchema = z
  .object({
    email: emailField,
    confirm_email: emailField,
  })
  .refine((data) => data.email === data.confirm_email, {
    message: 'Emails must match',
    path: ['confirm_email'],
  });

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;

export type RestorePasswordSchema = z.infer<typeof restorePasswordSchema>;

export type UserLoginSchema = z.infer<typeof userLoginSchema>;
