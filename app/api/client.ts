import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

// Такой подход позволяет использовать один и тот же экземпляр PrismaClient во всем приложении во избежане неэффективного создания повторных подключений к базе данных.
if (process.env.NODE_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;
