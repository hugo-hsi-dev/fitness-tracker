import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryWhereUniqueInputSchema } from './WeightEntryWhereUniqueInputSchema';
import { WeightEntryCreateWithoutUserInputSchema } from './WeightEntryCreateWithoutUserInputSchema';
import { WeightEntryUncheckedCreateWithoutUserInputSchema } from './WeightEntryUncheckedCreateWithoutUserInputSchema';

export const WeightEntryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => WeightEntryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WeightEntryCreateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default WeightEntryCreateOrConnectWithoutUserInputSchema;
