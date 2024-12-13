import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema } from './WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutExerciseTimeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  weights: z.lazy(() => WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutExerciseTimeInputSchema;
