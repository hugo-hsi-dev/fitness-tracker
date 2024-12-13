import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WeightEntrySelectSchema } from '../inputTypeSchemas/WeightEntrySelectSchema';
import { WeightEntryIncludeSchema } from '../inputTypeSchemas/WeightEntryIncludeSchema';

export const WeightEntryArgsSchema: z.ZodType<Prisma.WeightEntryDefaultArgs> = z.object({
  select: z.lazy(() => WeightEntrySelectSchema).optional(),
  include: z.lazy(() => WeightEntryIncludeSchema).optional(),
}).strict();

export default WeightEntryArgsSchema;
