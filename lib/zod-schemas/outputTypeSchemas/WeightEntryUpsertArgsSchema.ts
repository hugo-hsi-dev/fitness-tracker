import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryIncludeSchema } from '../inputTypeSchemas/WeightEntryIncludeSchema'
import { WeightEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WeightEntryWhereUniqueInputSchema'
import { WeightEntryCreateInputSchema } from '../inputTypeSchemas/WeightEntryCreateInputSchema'
import { WeightEntryUncheckedCreateInputSchema } from '../inputTypeSchemas/WeightEntryUncheckedCreateInputSchema'
import { WeightEntryUpdateInputSchema } from '../inputTypeSchemas/WeightEntryUpdateInputSchema'
import { WeightEntryUncheckedUpdateInputSchema } from '../inputTypeSchemas/WeightEntryUncheckedUpdateInputSchema'
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

export const WeightEntryUpsertArgsSchema: z.ZodType<Prisma.WeightEntryUpsertArgs> = z.object({
  select: WeightEntrySelectSchema.optional(),
  include: WeightEntryIncludeSchema.optional(),
  where: WeightEntryWhereUniqueInputSchema,
  create: z.union([ WeightEntryCreateInputSchema,WeightEntryUncheckedCreateInputSchema ]),
  update: z.union([ WeightEntryUpdateInputSchema,WeightEntryUncheckedUpdateInputSchema ]),
}).strict() ;

export default WeightEntryUpsertArgsSchema;
