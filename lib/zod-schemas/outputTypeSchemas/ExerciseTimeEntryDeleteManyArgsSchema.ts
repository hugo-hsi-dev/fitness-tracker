import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryWhereInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereInputSchema'

export const ExerciseTimeEntryDeleteManyArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryDeleteManyArgs> = z.object({
  where: ExerciseTimeEntryWhereInputSchema.optional(),
}).strict() ;

export default ExerciseTimeEntryDeleteManyArgsSchema;
