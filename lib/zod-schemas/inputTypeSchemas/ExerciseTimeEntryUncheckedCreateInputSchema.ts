import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ExerciseTimeEntryUncheckedCreateInputSchema: z.ZodType<Prisma.ExerciseTimeEntryUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  userId: z.string(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export default ExerciseTimeEntryUncheckedCreateInputSchema;
