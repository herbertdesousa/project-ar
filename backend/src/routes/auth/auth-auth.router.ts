import { Router } from 'express';

import { validationMiddleware } from '@/middleware/validation.middleware';

import { AuthAuth } from './dtos/auth-auth.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const authAuthRouter = Router();

authAuthRouter.post('/', validationMiddleware(AuthAuth), async (req, res) => {
  const { email, id_auth, name, picture } = req.body as AuthAuth;

  const findedUser = await prisma.users.findFirst({ where: { id_auth } });

  if (!findedUser) {
    await prisma.users.create({ data: { email, id_auth, name, picture } });
  }

  return res.json({ email, id_auth, name, picture });
});

export { authAuthRouter };
