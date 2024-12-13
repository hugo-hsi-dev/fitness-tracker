import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WeightEntryCountOrderByAggregateInputSchema } from './WeightEntryCountOrderByAggregateInputSchema';
import { WeightEntryMaxOrderByAggregateInputSchema } from './WeightEntryMaxOrderByAggregateInputSchema';
import { WeightEntryMinOrderByAggregateInputSchema } from './WeightEntryMinOrderByAggregateInputSchema';

export const WeightEntryOrderByWithAggregationInputSchema: z.ZodType<Prisma.WeightEntryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => WeightEntryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => WeightEntryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => WeightEntryMinOrderByAggregateInputSchema).optional()
}).strict();

export default WeightEntryOrderByWithAggregationInputSchema;
