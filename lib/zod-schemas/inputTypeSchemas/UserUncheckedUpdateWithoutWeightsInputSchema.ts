import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema } from './ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema';

export const UserUncheckedUpdateWithoutWeightsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutWeightsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  exerciseTime: z.lazy(() => ExerciseTimeEntryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutWeightsInputSchema;
