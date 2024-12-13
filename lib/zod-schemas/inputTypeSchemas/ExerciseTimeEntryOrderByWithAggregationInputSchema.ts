import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ExerciseTimeEntryCountOrderByAggregateInputSchema } from './ExerciseTimeEntryCountOrderByAggregateInputSchema';
import { ExerciseTimeEntryMaxOrderByAggregateInputSchema } from './ExerciseTimeEntryMaxOrderByAggregateInputSchema';
import { ExerciseTimeEntryMinOrderByAggregateInputSchema } from './ExerciseTimeEntryMinOrderByAggregateInputSchema';

export const ExerciseTimeEntryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExerciseTimeEntryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ExerciseTimeEntryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExerciseTimeEntryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExerciseTimeEntryMinOrderByAggregateInputSchema).optional()
}).strict();

export default ExerciseTimeEntryOrderByWithAggregationInputSchema;
