import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryWhereInputSchema } from '../inputTypeSchemas/WeightEntryWhereInputSchema'

export const WeightEntryDeleteManyArgsSchema: z.ZodType<Prisma.WeightEntryDeleteManyArgs> = z.object({
  where: WeightEntryWhereInputSchema.optional(),
}).strict() ;

export default WeightEntryDeleteManyArgsSchema;
