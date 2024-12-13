import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ExerciseTimeEntryIncludeSchema } from '../inputTypeSchemas/ExerciseTimeEntryIncludeSchema'
import { ExerciseTimeEntryWhereInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereInputSchema'
import { ExerciseTimeEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryOrderByWithRelationInputSchema'
import { ExerciseTimeEntryWhereUniqueInputSchema } from '../inputTypeSchemas/ExerciseTimeEntryWhereUniqueInputSchema'
import { ExerciseTimeEntryScalarFieldEnumSchema } from '../inputTypeSchemas/ExerciseTimeEntryScalarFieldEnumSchema'
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

export const ExerciseTimeEntryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExerciseTimeEntryFindFirstOrThrowArgs> = z.object({
  select: ExerciseTimeEntrySelectSchema.optional(),
  include: ExerciseTimeEntryIncludeSchema.optional(),
  where: ExerciseTimeEntryWhereInputSchema.optional(),
  orderBy: z.union([ ExerciseTimeEntryOrderByWithRelationInputSchema.array(),ExerciseTimeEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: ExerciseTimeEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExerciseTimeEntryScalarFieldEnumSchema,ExerciseTimeEntryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ExerciseTimeEntryFindFirstOrThrowArgsSchema;
