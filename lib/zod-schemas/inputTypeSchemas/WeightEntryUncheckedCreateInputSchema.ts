import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WeightEntryUncheckedCreateInputSchema: z.ZodType<Prisma.WeightEntryUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export default WeightEntryUncheckedCreateInputSchema;
