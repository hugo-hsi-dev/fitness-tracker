import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryCreateManyInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryCreateManyInputSchema'

export const ExerciseTimeEntryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateManyAndReturnArgs> = z.object({
  data: z.union([ ExerciseTimeEntryCreateManyInputSchema,ExerciseTimeEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ExerciseTimeEntryCreateManyAndReturnArgsSchema;
