import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryWhereInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereInputSchema'
import { ExerciseTimeEntryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryOrderByWithAggregationInputSchema'
import { ExerciseTimeEntryScalarFieldEnumSchema } from '../inputTypeSchemas/ExerciseTimeEntryScalarFieldEnumSchema'
import { ExerciseTimeEntryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryScalarWhereWithAggregatesInputSchema'

export const ExerciseTimeEntryGroupByArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryGroupByArgs> = z.object({
  where: ExerciseTimeEntryWhereInputSchema.optional(),
  orderBy: z.union([ ExerciseTimeEntryOrderByWithAggregationInputSchema.array(),ExerciseTimeEntryOrderByWithAggregationInputSchema ]).optional(),
  by: ExerciseTimeEntryScalarFieldEnumSchema.array(),
  having: ExerciseTimeEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ExerciseTimeEntryGroupByArgsSchema;
