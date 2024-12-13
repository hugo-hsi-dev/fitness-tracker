import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema } from './WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  weights: z.lazy(() => WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
