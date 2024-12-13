import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema } from './WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema';

export const UserUncheckedCreateWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutExerciseTimeInput> = z.object({
  id: z.string().uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  weights: z.lazy(() => WeightEntryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutExerciseTimeInputSchema;
