import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryCreateWithoutUserInputSchema } from './WeightEntryCreateWithoutUserInputSchema';
import { WeightEntryUncheckedCreateWithoutUserInputSchema } from './WeightEntryUncheckedCreateWithoutUserInputSchema';
import { WeightEntryCreateOrConnectWithoutUserInputSchema } from './WeightEntryCreateOrConnectWithoutUserInputSchema';
import { WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema } from './WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema';
import { WeightEntryCreateManyUserInputEnvelopeSchema } from './WeightEntryCreateManyUserInputEnvelopeSchema';
import { WeightEntryWhereUniqueInputSchema } from './WeightEntryWhereUniqueInputSchema';
import { WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema } from './WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema';
import { WeightEntryUpdateManyWithWhereWithoutUserInputSchema } from './WeightEntryUpdateManyWithWhereWithoutUserInputSchema';
import { WeightEntryScalarWhereInputSchema } from './WeightEntryScalarWhereInputSchema';

export const WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.WeightEntryUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => WeightEntryCreateWithoutUserInputSchema),z.lazy(() => WeightEntryCreateWithoutUserInputSchema).array(),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WeightEntryCreateOrConnectWithoutUserInputSchema),z.lazy(() => WeightEntryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WeightEntryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WeightEntryWhereUniqueInputSchema),z.lazy(() => WeightEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WeightEntryWhereUniqueInputSchema),z.lazy(() => WeightEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WeightEntryWhereUniqueInputSchema),z.lazy(() => WeightEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WeightEntryWhereUniqueInputSchema),z.lazy(() => WeightEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WeightEntryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => WeightEntryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WeightEntryScalarWhereInputSchema),z.lazy(() => WeightEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WeightEntryUncheckedUpdateManyWithoutUserNestedInputSchema;
