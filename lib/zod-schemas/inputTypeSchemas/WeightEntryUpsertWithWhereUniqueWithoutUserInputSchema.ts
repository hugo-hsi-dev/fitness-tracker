import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryWhereUniqueInputSchema } from './WeightEntryWhereUniqueInputSchema';
import { WeightEntryUpdateWithoutUserInputSchema } from './WeightEntryUpdateWithoutUserInputSchema';
import { WeightEntryUncheckedUpdateWithoutUserInputSchema } from './WeightEntryUncheckedUpdateWithoutUserInputSchema';
import { WeightEntryCreateWithoutUserInputSchema } from './WeightEntryCreateWithoutUserInputSchema';
import { WeightEntryUncheckedCreateWithoutUserInputSchema } from './WeightEntryUncheckedCreateWithoutUserInputSchema';

export const WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => WeightEntryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WeightEntryUpdateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => WeightEntryCreateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default WeightEntryUpsertWithWhereUniqueWithoutUserInputSchema;
