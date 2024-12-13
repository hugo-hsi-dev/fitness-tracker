import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryWhereInputSchema } from './WeightEntryWhereInputSchema';

export const WeightEntryListRelationFilterSchema: z.ZodType<Prisma.WeightEntryListRelationFilter> = z.object({
  every: z.lazy(() => WeightEntryWhereInputSchema).optional(),
  some: z.lazy(() => WeightEntryWhereInputSchema).optional(),
  none: z.lazy(() => WeightEntryWhereInputSchema).optional()
}).strict();

export default WeightEntryListRelationFilterSchema;
