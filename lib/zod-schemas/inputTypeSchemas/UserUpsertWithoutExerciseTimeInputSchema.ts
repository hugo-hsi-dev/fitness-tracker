import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutExerciseTimeInputSchema } from './UserUpdateWithoutExerciseTimeInputSchema';
import { UserUncheckedUpdateWithoutExerciseTimeInputSchema } from './UserUncheckedUpdateWithoutExerciseTimeInputSchema';
import { UserCreateWithoutExerciseTimeInputSchema } from './UserCreateWithoutExerciseTimeInputSchema';
import { UserUncheckedCreateWithoutExerciseTimeInputSchema } from './UserUncheckedCreateWithoutExerciseTimeInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserUpsertWithoutExerciseTimeInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutExerciseTimeInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedCreateWithoutExerciseTimeInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutExerciseTimeInputSchema;
