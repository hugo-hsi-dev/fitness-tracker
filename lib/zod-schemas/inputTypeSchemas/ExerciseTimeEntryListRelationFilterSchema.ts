import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryWhereInputSchema } from './ExerciseTimeEntryWhereInputSchema';

export const ExerciseTimeEntryListRelationFilterSchema: z.ZodType<Prisma.ExerciseTimeEntryListRelationFilter> = z.object({
  every: z.lazy(() => ExerciseTimeEntryWhereInputSchema).optional(),
  some: z.lazy(() => ExerciseTimeEntryWhereInputSchema).optional(),
  none: z.lazy(() => ExerciseTimeEntryWhereInputSchema).optional()
}).strict();

export default ExerciseTimeEntryListRelationFilterSchema;
