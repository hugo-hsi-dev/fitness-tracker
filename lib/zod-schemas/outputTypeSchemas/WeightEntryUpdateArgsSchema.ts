import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryIncludeSchema } from '../inputTypeSchemas/WeightEntryIncludeSchema'
import { WeightEntryUpdateInputSchema } from '../inputTypeSchemas/WeightEntryUpdateInputSchema'
import { WeightEntryUncheckedUpdateInputSchema } from '../inputTypeSchemas/WeightEntryUncheckedUpdateInputSchema'
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

export const WeightEntryUpdateArgsSchema: z.ZodType<Prisma.WeightEntryUpdateArgs> = z.object({
  select: WeightEntrySelectSchema.optional(),
  include: WeightEntryIncludeSchema.optional(),
  data: z.union([ WeightEntryUpdateInputSchema,WeightEntryUncheckedUpdateInputSchema ]),
  where: WeightEntryWhereUniqueInputSchema,
}).strict() ;

export default WeightEntryUpdateArgsSchema;
