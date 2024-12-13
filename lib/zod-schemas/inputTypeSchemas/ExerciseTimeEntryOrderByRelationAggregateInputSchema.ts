import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ExerciseTimeEntryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ExerciseTimeEntryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ExerciseTimeEntryOrderByRelationAggregateInputSchema;
