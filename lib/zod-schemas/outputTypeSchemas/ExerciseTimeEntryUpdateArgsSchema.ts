import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryIncludeSchema } from '../inputTypeSchemas/ExerciseTimeEntryIncludeSchema'
import { ExerciseTimeEntryUpdateInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryUpdateInputSchema'
import { ExerciseTimeEntryUncheckedUpdateInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryUncheckedUpdateInputSchema'
import { ExerciseTimeEntryWhereUniqueInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ExerciseTimeEntrySelectSchema: z.ZodType<Prisma.ExerciseTimeEntrySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ExerciseTimeEntryUpdateArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryUpdateArgs> = z.object({
  select: ExerciseTimeEntrySelectSchema.optional(),
  include: ExerciseTimeEntryIncludeSchema.optional(),
  data: z.union([ ExerciseTimeEntryUpdateInputSchema,ExerciseTimeEntryUncheckedUpdateInputSchema ]),
  where: ExerciseTimeEntryWhereUniqueInputSchema,
}).strict() ;

export default ExerciseTimeEntryUpdateArgsSchema;
