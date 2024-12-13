import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryWhereUniqueInputSchema } from './WeightEntryWhereUniqueInputSchema';
import { WeightEntryUpdateWithoutUserInputSchema } from './WeightEntryUpdateWithoutUserInputSchema';
import { WeightEntryUncheckedUpdateWithoutUserInputSchema } from './WeightEntryUncheckedUpdateWithoutUserInputSchema';

export const WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => WeightEntryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WeightEntryUpdateWithoutUserInputSchema),z.lazy(() => WeightEntryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default WeightEntryUpdateWithWhereUniqueWithoutUserInputSchema;
