import { Router } from 'express';

import { authAuthRouter } from './auth-auth.router';

const authRouter = Router();

authRouter.use(authAuthRouter);

export { authRouter };
