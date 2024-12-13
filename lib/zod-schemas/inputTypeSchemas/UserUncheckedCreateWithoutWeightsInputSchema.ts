import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutWeightsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutWeightsInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutWeightsInputSchema;
