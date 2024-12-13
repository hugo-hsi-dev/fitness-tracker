import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryCreateNestedManyWithoutUserInputSchema } from './WeightEntryCreateNestedManyWithoutUserInputSchema';

export const UserCreateWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserCreateWithoutExerciseTimeInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  weights: z.lazy(() => WeightEntryCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutExerciseTimeInputSchema;
