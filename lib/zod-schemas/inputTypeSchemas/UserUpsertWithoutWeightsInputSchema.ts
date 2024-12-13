import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutWeightsInputSchema } from './UserUpdateWithoutWeightsInputSchema';
import { UserUncheckedUpdateWithoutWeightsInputSchema } from './UserUncheckedUpdateWithoutWeightsInputSchema';
import { UserCreateWithoutWeightsInputSchema } from './UserCreateWithoutWeightsInputSchema';
import { UserUncheckedCreateWithoutWeightsInputSchema } from './UserUncheckedCreateWithoutWeightsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutWeightsInputSchema: z.ZodType<Prisma.UserUpsertWithoutWeightsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWeightsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWeightsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutWeightsInputSchema;
