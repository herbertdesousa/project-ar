import { plainToClass } from 'class-transformer';
import { validate, type ValidationError } from 'class-validator';

import { type Request, type Response, type NextFunction } from 'express';
import { AppError } from '../errors/AppErrors';

export function validationMiddleware(
  type: any,
  skipMissingProperties = false
): any {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const errors: ValidationError[] = await validate(
      plainToClass(type, { ...req.body, ...req.query }),
      { skipMissingProperties }
    );

    if (errors.length > 0) {
      const message = errors
        .map((error: ValidationError) =>
          Object.values(error.constraints as any)
        )
        .join(', ');

      throw new AppError(422, message);
    }

    next();
  };
}
