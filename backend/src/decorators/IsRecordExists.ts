import { registerDecorator, type ValidationOptions } from 'class-validator';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function recordExists(
  tableName: string,
  columnName: string,
  id: string
): Promise<boolean> {
  const record = await prisma[tableName as 'users'].findUnique({
    where: { [columnName]: id }
  });

  return record === null;
}

export function IsRecordExists(
  table: string,
  field: string,
  validationOptions?: ValidationOptions
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsRecordExists',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      async: true,
      validator: {
        async validate(value: string) {
          // eslint-disable-next-line @typescript-eslint/return-await
          return recordExists(table, field, value);
        },
        defaultMessage() {
          return 'User with ID already exists';
        }
      }
    });
  };
}
