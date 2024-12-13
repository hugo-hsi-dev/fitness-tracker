import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWeightsInputSchema } from './UserCreateWithoutWeightsInputSchema';
import { UserUncheckedCreateWithoutWeightsInputSchema } from './UserUncheckedCreateWithoutWeightsInputSchema';
import { UserCreateOrConnectWithoutWeightsInputSchema } from './UserCreateOrConnectWithoutWeightsInputSchema';
import { UserUpsertWithoutWeightsInputSchema } from './UserUpsertWithoutWeightsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutWeightsInputSchema } from './UserUpdateToOneWithWhereWithoutWeightsInputSchema';
import { UserUpdateWithoutWeightsInputSchema } from './UserUpdateWithoutWeightsInputSchema';
import { UserUncheckedUpdateWithoutWeightsInputSchema } from './UserUncheckedUpdateWithoutWeightsInputSchema';

export const UserUpdateOneRequiredWithoutWeightsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWeightsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWeightsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWeightsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWeightsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutWeightsInputSchema),z.lazy(() => UserUpdateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWeightsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutWeightsNestedInputSchema;
