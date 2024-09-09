import { PrismaClient } from '@prisma/client';


// Used `unknown` to bypass TypeScript's type checking for the global object
const globalForPrisma = global as unknown as { prisma: PrismaClient };


export const prisma = globalForPrisma.prisma || new PrismaClient({
    log: ["query", "error"],
});

// this condition will avoid making multiple prisma client  instances in development mode
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


export default prisma;
