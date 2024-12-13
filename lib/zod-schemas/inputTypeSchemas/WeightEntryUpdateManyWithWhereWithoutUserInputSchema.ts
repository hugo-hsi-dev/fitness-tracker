import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WeightEntryScalarWhereInputSchema } from './WeightEntryScalarWhereInputSchema';
import { WeightEntryUpdateManyMutationInputSchema } from './WeightEntryUpdateManyMutationInputSchema';
import { WeightEntryUncheckedUpdateManyWithoutUserInputSchema } from './WeightEntryUncheckedUpdateManyWithoutUserInputSchema';

export const WeightEntryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.WeightEntryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => WeightEntryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WeightEntryUpdateManyMutationInputSchema),z.lazy(() => WeightEntryUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default WeightEntryUpdateManyWithWhereWithoutUserInputSchema;
