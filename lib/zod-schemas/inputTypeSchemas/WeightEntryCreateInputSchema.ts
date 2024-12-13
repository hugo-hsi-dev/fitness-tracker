import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutWeightsInputSchema } from './UserCreateNestedOneWithoutWeightsInputSchema';

export const WeightEntryCreateInputSchema: z.ZodType<Prisma.WeightEntryCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutWeightsInputSchema)
}).strict();

export default WeightEntryCreateInputSchema;
