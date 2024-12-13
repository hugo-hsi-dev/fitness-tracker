import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ExerciseTimeEntryUpdateManyWithoutUserNestedInputSchema } from './ExerciseTimeEntryUpdateManyWithoutUserNestedInputSchema';

export const UserUpdateWithoutWeightsInputSchema: z.ZodType<Prisma.UserUpdateWithoutWeightsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutWeightsInputSchema;
