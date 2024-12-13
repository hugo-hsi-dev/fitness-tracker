import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutExerciseTimeInputSchema } from './UserUpdateWithoutExerciseTimeInputSchema';
import { UserUncheckedUpdateWithoutExerciseTimeInputSchema } from './UserUncheckedUpdateWithoutExerciseTimeInputSchema';

export const UserUpdateToOneWithWhereWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutExerciseTimeInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutExerciseTimeInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutExerciseTimeInputSchema;
