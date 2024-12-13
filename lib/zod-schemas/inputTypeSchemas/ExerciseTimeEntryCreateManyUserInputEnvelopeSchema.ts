import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryCreateManyUserInputSchema } from './ExerciseTimeEntryCreateManyUserInputSchema';

export const ExerciseTimeEntryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ExerciseTimeEntryCreateManyUserInputSchema),z.lazy(() => ExerciseTimeEntryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ExerciseTimeEntryCreateManyUserInputEnvelopeSchema;
