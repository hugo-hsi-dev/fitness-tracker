import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutExerciseTimeInputSchema } from './UserCreateNestedOneWithoutExerciseTimeInputSchema';

export const ExerciseTimeEntryCreateInputSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateInput> = z.object({
  id: z.string().uuid().optional(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutExerciseTimeInputSchema)
}).strict();

export default ExerciseTimeEntryCreateInputSchema;
