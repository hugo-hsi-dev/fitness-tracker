import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryWhereUniqueInputSchema } from './ExerciseTimeEntryWhereUniqueInputSchema';
import { ExerciseTimeEntryCreateWithoutUserInputSchema } from './ExerciseTimeEntryCreateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema';

export const ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema;
