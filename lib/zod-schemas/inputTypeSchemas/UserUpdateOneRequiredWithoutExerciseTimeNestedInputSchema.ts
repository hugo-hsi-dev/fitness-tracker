import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutExerciseTimeInputSchema } from './UserCreateWithoutExerciseTimeInputSchema';
import { UserUncheckedCreateWithoutExerciseTimeInputSchema } from './UserUncheckedCreateWithoutExerciseTimeInputSchema';
import { UserCreateOrConnectWithoutExerciseTimeInputSchema } from './UserCreateOrConnectWithoutExerciseTimeInputSchema';
import { UserUpsertWithoutExerciseTimeInputSchema } from './UserUpsertWithoutExerciseTimeInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutExerciseTimeInputSchema } from './UserUpdateToOneWithWhereWithoutExerciseTimeInputSchema';
import { UserUpdateWithoutExerciseTimeInputSchema } from './UserUpdateWithoutExerciseTimeInputSchema';
import { UserUncheckedUpdateWithoutExerciseTimeInputSchema } from './UserUncheckedUpdateWithoutExerciseTimeInputSchema';

export const UserUpdateOneRequiredWithoutExerciseTimeNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutExerciseTimeNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedCreateWithoutExerciseTimeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExerciseTimeInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutExerciseTimeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutExerciseTimeInputSchema),z.lazy(() => UserUpdateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedUpdateWithoutExerciseTimeInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutExerciseTimeNestedInputSchema;
