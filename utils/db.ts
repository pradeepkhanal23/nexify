// importing prisma client
// The PrismaClient is the main class provided by Prisma, which acts as the interface to interact with the database (queries, mutations, etc.).
import { PrismaClient } from "@prisma/client";

// Instantiating the PrismaClient
const prisma = new PrismaClient();

// previously I just instantiated the prisma with the prisma client where I was creating a multiple new connection to the database  which was causing the connection exhaustion and breaking up
// it used to work after I restart but the same breaking up used to happen after a certain period of time

// -------doc refrence-------
// https://www.prisma.io/docs/guides/prisma-orm-with-nextjs

// Declaring a global variable to reuse the Prisma client in a development environment.
const globalForPrisma = global as unknown as { prisma: typeof prisma };

// In development (NODE_ENV !== "production"), the server restarts frequently due to hot-reloading.
// Without this, a new instance of PrismaClient would be created on each restart, exhausting database connections.
// By storing the prisma instance in globalForPrisma, the same instance is reused across restarts.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// and finally This exports the Prisma client instance so you can use it in other parts of your application.
// Wherever you import prisma, you’re guaranteed to be using the same, single, globally-reused instance, avoiding connection issues.
export default prisma;
