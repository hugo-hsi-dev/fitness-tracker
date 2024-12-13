import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default UserCreateManyInputSchema;