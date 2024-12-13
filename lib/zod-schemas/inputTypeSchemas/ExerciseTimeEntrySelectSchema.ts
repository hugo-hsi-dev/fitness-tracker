import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const ExerciseTimeEntrySelectSchema: z.ZodType<Prisma.ExerciseTimeEntrySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default ExerciseTimeEntrySelectSchema;
