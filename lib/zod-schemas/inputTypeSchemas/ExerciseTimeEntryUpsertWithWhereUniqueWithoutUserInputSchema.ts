import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryWhereUniqueInputSchema } from './ExerciseTimeEntryWhereUniqueInputSchema';
import { ExerciseTimeEntryUpdateWithoutUserInputSchema } from './ExerciseTimeEntryUpdateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema';
import { ExerciseTimeEntryCreateWithoutUserInputSchema } from './ExerciseTimeEntryCreateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema';

export const ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ExerciseTimeEntryUpdateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema;
