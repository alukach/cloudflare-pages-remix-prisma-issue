/**
 * NOTES:
 * - https://github.com/prisma/prisma/issues/13771#issuecomment-1204295665
 */
import { PrismaClient } from "@prisma/client/edge";

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production we'll have a single connection to the DB.
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient({
      datasources: {
        db: {
          url: "prisma://aws-us-east-1.prisma-data.com/?api_key=24KC57tpMlPKNm4m8sYhaMRkwY7STC_tmkRaJotRna5xF483IzyfFnHIVzOocASf",
        },
      },
    });
  }
  prisma = global.__db__;
  prisma.$connect();
}

export { prisma };
