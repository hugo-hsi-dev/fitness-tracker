import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryScalarWhereInputSchema } from './ExerciseTimeEntryScalarWhereInputSchema';
import { ExerciseTimeEntryUpdateManyMutationInputSchema } from './ExerciseTimeEntryUpdateManyMutationInputSchema';
import { ExerciseTimeEntryUncheckedUpdateManyWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedUpdateManyWithoutUserInputSchema';

export const ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ExerciseTimeEntryUpdateManyMutationInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema;
