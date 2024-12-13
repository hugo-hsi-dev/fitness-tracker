import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryWhereInputSchema } from '../inputTypeSchemas/WeightEntryWhereInputSchema'
import { WeightEntryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WeightEntryOrderByWithAggregationInputSchema'
import { WeightEntryScalarFieldEnumSchema } from '../inputTypeSchemas/WeightEntryScalarFieldEnumSchema'
import { WeightEntryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WeightEntryScalarWhereWithAggregatesInputSchema'

export const WeightEntryGroupByArgsSchema: z.ZodType<Prisma.WeightEntryGroupByArgs> = z.object({
  where: WeightEntryWhereInputSchema.optional(),
  orderBy: z.union([ WeightEntryOrderByWithAggregationInputSchema.array(),WeightEntryOrderByWithAggregationInputSchema ]).optional(),
  by: WeightEntryScalarFieldEnumSchema.array(),
  having: WeightEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WeightEntryGroupByArgsSchema;
