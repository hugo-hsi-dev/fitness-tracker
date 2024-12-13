import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryCreateManyUserInputSchema } from './WeightEntryCreateManyUserInputSchema';

export const WeightEntryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.WeightEntryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WeightEntryCreateManyUserInputSchema),z.lazy(() => WeightEntryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WeightEntryCreateManyUserInputEnvelopeSchema;
