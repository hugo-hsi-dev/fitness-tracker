import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema } from './WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema';
import { ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema } from './ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  weights: z.lazy(() => WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateInputSchema;
