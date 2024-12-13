import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryWhereUniqueInputSchema } from './ExerciseTimeEntryWhereUniqueInputSchema';
import { ExerciseTimeEntryUpdateWithoutUserInputSchema } from './ExerciseTimeEntryUpdateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema';

export const ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ExerciseTimeEntryUpdateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema;
