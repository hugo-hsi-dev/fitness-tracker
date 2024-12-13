import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntryFindManyArgsSchema } from "../outputTypeSchemas/WeightEntryFindManyArgsSchema"
import { ExerciseTimeEntryFindManyArgsSchema } from "../outputTypeSchemas/ExerciseTimeEntryFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  weights: z.union([z.boolean(),z.lazy(() => WeightEntryFindManyArgsSchema)]).optional(),
  exerciseTime: z.union([z.boolean(),z.lazy(() => ExerciseTimeEntryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
