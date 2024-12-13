import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WeightEntryUpdateManyWithoutUserNestedInputSchema } from './WeightEntryUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserUpdateWithoutExerciseTimeInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  weights: z.lazy(() => WeightEntryUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutExerciseTimeInputSchema;
