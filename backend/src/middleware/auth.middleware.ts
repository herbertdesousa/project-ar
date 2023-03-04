import { type Request, type Response, type NextFunction } from 'express';

import { PrismaClient, type users } from '@prisma/client';

import { AppError } from '../errors/AppErrors';

const prisma = new PrismaClient();

export interface AuthMiddlewarePayload {
  _user: users;
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // using authorization as id_auth instead of token
  const id_auth = req.headers.authorization?.split(' ')[1];

  const user = await prisma.users
    .findFirstOrThrow({ where: { id_auth } })
    .catch(() => {
      throw new AppError(404, 'User not found');
    });

  const payload: AuthMiddlewarePayload = { _user: user };
  Object.assign(req.body, payload);

  next();
}
