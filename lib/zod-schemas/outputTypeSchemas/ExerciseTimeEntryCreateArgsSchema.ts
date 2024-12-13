import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryIncludeSchema } from '../inputTypeSchemas/ExerciseTimeEntryIncludeSchema'
import { ExerciseTimeEntryCreateInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryCreateInputSchema'
import { ExerciseTimeEntryUncheckedCreateInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryUncheckedCreateInputSchema'
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

export const ExerciseTimeEntryCreateArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateArgs> = z.object({
  select: ExerciseTimeEntrySelectSchema.optional(),
  include: ExerciseTimeEntryIncludeSchema.optional(),
  data: z.union([ ExerciseTimeEntryCreateInputSchema,ExerciseTimeEntryUncheckedCreateInputSchema ]),
}).strict() ;

export default ExerciseTimeEntryCreateArgsSchema;
