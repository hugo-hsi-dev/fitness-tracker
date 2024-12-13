import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryUpdateManyMutationInputSchema'
import { ExerciseTimeEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryUncheckedUpdateManyInputSchema'
import { ExerciseTimeEntryWhereInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereInputSchema'

export const ExerciseTimeEntryUpdateManyArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryUpdateManyArgs> = z.object({
  data: z.union([ ExerciseTimeEntryUpdateManyMutationInputSchema,ExerciseTimeEntryUncheckedUpdateManyInputSchema ]),
  where: ExerciseTimeEntryWhereInputSchema.optional(),
}).strict() ;

export default ExerciseTimeEntryUpdateManyArgsSchema;
