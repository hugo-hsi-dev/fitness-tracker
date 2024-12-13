import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryWhereInputSchema } from '../inputTypeSchemas/WeightEntryWhereInputSchema'
import { WeightEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeightEntryOrderByWithRelationInputSchema'
import { WeightEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WeightEntryWhereUniqueInputSchema'

export const WeightEntryAggregateArgsSchema: z.ZodType<Prisma.WeightEntryAggregateArgs> = z.object({
  where: WeightEntryWhereInputSchema.optional(),
  orderBy: z.union([ WeightEntryOrderByWithRelationInputSchema.array(),WeightEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: WeightEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WeightEntryAggregateArgsSchema;
