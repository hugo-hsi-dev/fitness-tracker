import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutWeightsInputSchema } from './UserCreateWithoutWeightsInputSchema';
import { UserUncheckedCreateWithoutWeightsInputSchema } from './UserUncheckedCreateWithoutWeightsInputSchema';

export const UserCreateOrConnectWithoutWeightsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWeightsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedCreateWithoutWeightsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutWeightsInputSchema;
