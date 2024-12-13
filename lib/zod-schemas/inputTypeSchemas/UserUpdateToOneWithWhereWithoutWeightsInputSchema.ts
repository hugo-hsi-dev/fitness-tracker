import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutWeightsInputSchema } from './UserUpdateWithoutWeightsInputSchema';
import { UserUncheckedUpdateWithoutWeightsInputSchema } from './UserUncheckedUpdateWithoutWeightsInputSchema';

export const UserUpdateToOneWithWhereWithoutWeightsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWeightsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutWeightsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutWeightsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutWeightsInputSchema;
