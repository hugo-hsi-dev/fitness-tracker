import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/WeightEntryUpdateManyMutationInputSchema'
import { WeightEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WeightEntryUncheckedUpdateManyInputSchema'
import { WeightEntryWhereInputSchema } from '../inputTypeSchemas/WeightEntryWhereInputSchema'

export const WeightEntryUpdateManyArgsSchema: z.ZodType<Prisma.WeightEntryUpdateManyArgs> = z.object({
  data: z.union([ WeightEntryUpdateManyMutationInputSchema,WeightEntryUncheckedUpdateManyInputSchema ]),
  where: WeightEntryWhereInputSchema.optional(),
}).strict() ;

export default WeightEntryUpdateManyArgsSchema;
