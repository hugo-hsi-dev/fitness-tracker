import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const ExerciseTimeEntryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExerciseTimeEntryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExerciseTimeEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => ExerciseTimeEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExerciseTimeEntryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExerciseTimeEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => ExerciseTimeEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default ExerciseTimeEntryScalarWhereWithAggregatesInputSchema;
