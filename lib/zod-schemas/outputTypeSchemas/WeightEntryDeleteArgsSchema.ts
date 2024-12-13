import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryIncludeSchema } from '../inputTypeSchemas/WeightEntryIncludeSchema'
import { WeightEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WeightEntryWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WeightEntrySelectSchema: z.ZodType<Prisma.WeightEntrySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const WeightEntryDeleteArgsSchema: z.ZodType<Prisma.WeightEntryDeleteArgs> = z.object({
  select: WeightEntrySelectSchema.optional(),
  include: WeightEntryIncludeSchema.optional(),
  where: WeightEntryWhereUniqueInputSchema,
}).strict() ;

export default WeightEntryDeleteArgsSchema;
