import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryCreateWithoutUserInputSchema } from './WeightEntryCreateWithoutUserInputSchema';
import { WeightEntryUncheckedCreateWithoutUserInputSchema } from './WeightEntryUncheckedCreateWithoutUserInputSchema';
import { WeightEntryCreateOrConnectWithoutUserInputSchema } from './WeightEntryCreateOrConnectWithoutUserInputSchema';
import { WeightEntryCreateManyUserInputEnvelopeSchema } from './WeightEntryCreateManyUserInputEnvelopeSchema';
import { WeightEntryWhereUniqueInputSchema } from './WeightEntryWhereUniqueInputSchema';

export const WeightEntryCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => WeightEntryCreateWithoutUserInputSchema),z.lazy(() => WeightEntryCreateWithoutUserInputSchema).array(),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeightEntryCreateOrConnectWithoutUserInputSchema),z.lazy(() => WeightEntryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeightEntryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WeightEntryWhereUniqueInputSchema),z.lazy(() => WeightEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WeightEntryCreateNestedManyWithoutUserInputSchema;
