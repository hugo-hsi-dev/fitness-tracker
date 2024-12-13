import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const WeightEntryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WeightEntryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => WeightEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => WeightEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeightEntryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeightEntryScalarWhereWithAggregatesInputSchema),z.lazy(() => WeightEntryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default WeightEntryScalarWhereWithAggregatesInputSchema;
