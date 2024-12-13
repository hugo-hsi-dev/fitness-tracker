import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryCreateManyInputSchema } from '../inputTypeSchemas/WeightEntryCreateManyInputSchema'

export const WeightEntryCreateManyArgsSchema: z.ZodType<Prisma.WeightEntryCreateManyArgs> = z.object({
  data: z.union([ WeightEntryCreateManyInputSchema,WeightEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WeightEntryCreateManyArgsSchema;
