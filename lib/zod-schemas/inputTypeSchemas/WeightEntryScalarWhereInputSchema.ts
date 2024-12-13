import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const WeightEntryScalarWhereInputSchema: z.ZodType<Prisma.WeightEntryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WeightEntryScalarWhereInputSchema),z.lazy(() => WeightEntryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WeightEntryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WeightEntryScalarWhereInputSchema),z.lazy(() => WeightEntryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default WeightEntryScalarWhereInputSchema;
