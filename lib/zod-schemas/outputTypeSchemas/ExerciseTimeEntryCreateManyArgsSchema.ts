import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryCreateManyInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryCreateManyInputSchema'

export const ExerciseTimeEntryCreateManyArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateManyArgs> = z.object({
  data: z.union([ ExerciseTimeEntryCreateManyInputSchema,ExerciseTimeEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ExerciseTimeEntryCreateManyArgsSchema;
