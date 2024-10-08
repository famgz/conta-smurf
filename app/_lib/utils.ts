import { Prisma } from '@prisma/client';
import { type ClassValue, clsx } from 'clsx';
import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function plainify<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function formatPrice(price: Prisma.Decimal | number) {
  price = Number(price);
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number(price));
}

export function formatDate(date: Date | string) {
  return format(new Date(date), 'dd-MM-yyyy');
}
