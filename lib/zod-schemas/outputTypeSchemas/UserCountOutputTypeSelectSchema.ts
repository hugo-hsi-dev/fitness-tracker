import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  weights: z.boolean().optional(),
  exerciseTime: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
