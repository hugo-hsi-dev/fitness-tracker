import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const WeightEntryWhereInputSchema: z.ZodType<Prisma.WeightEntryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeightEntryWhereInputSchema),z.lazy(() => WeightEntryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeightEntryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeightEntryWhereInputSchema),z.lazy(() => WeightEntryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default WeightEntryWhereInputSchema;
