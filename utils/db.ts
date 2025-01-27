// importing prisma client
// The PrismaClient is the main class provided by Prisma, which acts as the interface to interact with the database (queries, mutations, etc.).
import { PrismaClient } from "@prisma/client";

// The withAccelerate feature requires installing the @prisma/extension-accelerate package separately.
// so we install it by writing "npm install @prisma/extension-accelerate"
// The withAccelerate extension is part of Prisma Accelerate, which improves query performance by using optimized database operations and in-memory caching. It enhances Prisma Client with additional functionalities to optimize query handling.
import { withAccelerate } from "@prisma/extension-accelerate";

// Instantiating the PrismaClient and extending it with the withAccelerate extension.
const prisma = new PrismaClient().$extends(withAccelerate());

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
