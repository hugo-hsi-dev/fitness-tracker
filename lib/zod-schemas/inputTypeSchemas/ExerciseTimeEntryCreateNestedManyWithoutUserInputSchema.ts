import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryCreateWithoutUserInputSchema } from './ExerciseTimeEntryCreateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema';
import { ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema } from './ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema';
import { ExerciseTimeEntryCreateManyUserInputEnvelopeSchema } from './ExerciseTimeEntryCreateManyUserInputEnvelopeSchema';
import { ExerciseTimeEntryWhereUniqueInputSchema } from './ExerciseTimeEntryWhereUniqueInputSchema';

export const ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ExerciseTimeEntryCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema).array(),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ExerciseTimeEntryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ExerciseTimeEntryCreateNestedManyWithoutUserInputSchema;
