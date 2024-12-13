import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeightEntryCreateWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export default WeightEntryCreateWithoutUserInputSchema;
