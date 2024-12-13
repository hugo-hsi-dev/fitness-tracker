import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutExerciseTimeInputSchema } from './UserCreateWithoutExerciseTimeInputSchema';
import { UserUncheckedCreateWithoutExerciseTimeInputSchema } from './UserUncheckedCreateWithoutExerciseTimeInputSchema';

export const UserCreateOrConnectWithoutExerciseTimeInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutExerciseTimeInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutExerciseTimeInputSchema),z.lazy(() => UserUncheckedCreateWithoutExerciseTimeInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutExerciseTimeInputSchema;
