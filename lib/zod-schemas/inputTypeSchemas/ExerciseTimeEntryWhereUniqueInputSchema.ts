import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryWhereInputSchema } from './ExerciseTimeEntryWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const ExerciseTimeEntryWhereUniqueInputSchema: z.ZodType<Prisma.ExerciseTimeEntryWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ExerciseTimeEntryWhereInputSchema),z.lazy(() => ExerciseTimeEntryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExerciseTimeEntryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExerciseTimeEntryWhereInputSchema),z.lazy(() => ExerciseTimeEntryWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default ExerciseTimeEntryWhereUniqueInputSchema;
