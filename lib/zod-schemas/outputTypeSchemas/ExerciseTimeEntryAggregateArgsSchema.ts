import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryWhereInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereInputSchema'
import { ExerciseTimeEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryOrderByWithRelationInputSchema'
import { ExerciseTimeEntryWhereUniqueInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereUniqueInputSchema'

export const ExerciseTimeEntryAggregateArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryAggregateArgs> = z.object({
  where: ExerciseTimeEntryWhereInputSchema.optional(),
  orderBy: z.union([ ExerciseTimeEntryOrderByWithRelationInputSchema.array(),ExerciseTimeEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciseTimeEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default ExerciseTimeEntryAggregateArgsSchema;
