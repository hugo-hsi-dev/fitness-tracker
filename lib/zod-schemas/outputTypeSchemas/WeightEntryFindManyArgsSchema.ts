import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryIncludeSchema } from '../inputTypeSchemas/WeightEntryIncludeSchema'
import { WeightEntryWhereInputSchema } from '../inputTypeSchemas/WeightEntryWhereInputSchema'
import { WeightEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/WeightEntryOrderByWithRelationInputSchema'
import { WeightEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WeightEntryWhereUniqueInputSchema'
import { WeightEntryScalarFieldEnumSchema } from '../inputTypeSchemas/WeightEntryScalarFieldEnumSchema'
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

export const WeightEntryFindManyArgsSchema: z.ZodType<Prisma.WeightEntryFindManyArgs> = z.object({
  select: WeightEntrySelectSchema.optional(),
  include: WeightEntryIncludeSchema.optional(),
  where: WeightEntryWhereInputSchema.optional(),
  orderBy: z.union([ WeightEntryOrderByWithRelationInputSchema.array(),WeightEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: WeightEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ WeightEntryScalarFieldEnumSchema,WeightEntryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default WeightEntryFindManyArgsSchema;
