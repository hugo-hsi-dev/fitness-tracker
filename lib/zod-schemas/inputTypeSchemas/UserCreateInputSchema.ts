import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryCreateNestedManyWithoutUserInputSchema } from './WeightEntryCreateNestedManyWithoutUserInputSchema';
import { ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema } from './ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  weights: z.lazy(() => WeightEntryCreateNestedManyWithoutUserInputSchema).optional(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
