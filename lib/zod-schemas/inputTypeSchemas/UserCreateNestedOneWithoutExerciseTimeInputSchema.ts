import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutExerciseTimeInputSchema } from './UserCreateWithoutExerciseTimeInputSchema';
import { UserUncheckedCreateWithoutExerciseTimeInputSchema } from './UserUncheckedCreateWithoutExerciseTimeInputSchema';
import { UserCreateOrConnectWithoutExerciseTimeInputSchema } from './UserCreateOrConnectWithoutExerciseTimeInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutExerciseTimeInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedCreateWithoutExerciseTimeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutExerciseTimeInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutExerciseTimeInputSchema;
