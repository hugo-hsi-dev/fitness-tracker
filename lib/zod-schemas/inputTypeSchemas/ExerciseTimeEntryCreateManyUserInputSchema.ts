import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ExerciseTimeEntryCreateManyUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable()
}).strict();

export default ExerciseTimeEntryCreateManyUserInputSchema;
