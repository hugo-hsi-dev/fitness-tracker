import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutWeightsInputSchema } from './UserCreateWithoutWeightsInputSchema';
import { UserUncheckedCreateWithoutWeightsInputSchema } from './UserUncheckedCreateWithoutWeightsInputSchema';
import { UserCreateOrConnectWithoutWeightsInputSchema } from './UserCreateOrConnectWithoutWeightsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutWeightsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutWeightsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWeightsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWeightsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutWeightsInputSchema;
