import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const ExerciseTimeEntryScalarWhereInputSchema: z.ZodType<Prisma.ExerciseTimeEntryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema),z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema),z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default ExerciseTimeEntryScalarWhereInputSchema;
