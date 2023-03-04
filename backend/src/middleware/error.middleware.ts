import { type Request, type Response, type NextFunction } from 'express';

import { AppError } from '../errors/AppErrors';

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof AppError) {
    return res
      .status(error.status)
      .json(
        typeof error.message === 'string'
          ? { error: error.message }
          : error.message
      );
  }

  console.log(error);

  return res.status(500).json(error);
}
