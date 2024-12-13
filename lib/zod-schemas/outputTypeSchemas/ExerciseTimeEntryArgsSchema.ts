import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntrySelectSchema } from '../inputTypeSchemas/ExerciseTimeEntrySelectSchema';
import { ExerciseTimeEntryIncludeSchema } from '../inputTypeSchemas/ExerciseTimeEntryIncludeSchema';

export const ExerciseTimeEntryArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryDefaultArgs> = z.object({
  select: z.lazy(() => ExerciseTimeEntrySelectSchema).optional(),
  include: z.lazy(() => ExerciseTimeEntryIncludeSchema).optional(),
}).strict();

export default ExerciseTimeEntryArgsSchema;
