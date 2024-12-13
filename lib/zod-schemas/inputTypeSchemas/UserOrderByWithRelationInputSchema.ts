import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { WeightEntryOrderByRelationAggregateInputSchema } from './WeightEntryOrderByRelationAggregateInputSchema';
import { ExerciseTimeEntryOrderByRelationAggregateInputSchema } from './ExerciseTimeEntryOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  weights: z.lazy(() => WeightEntryOrderByRelationAggregateInputSchema).optional(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
