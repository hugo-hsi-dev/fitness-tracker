import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema } from './ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutWeightsInputSchema: z.ZodType<Prisma.UserCreateWithoutWeightsInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutWeightsInputSchema;
