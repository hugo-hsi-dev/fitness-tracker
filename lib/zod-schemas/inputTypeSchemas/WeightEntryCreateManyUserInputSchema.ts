import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeightEntryCreateManyUserInputSchema: z.ZodType<Prisma.WeightEntryCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export default WeightEntryCreateManyUserInputSchema;
