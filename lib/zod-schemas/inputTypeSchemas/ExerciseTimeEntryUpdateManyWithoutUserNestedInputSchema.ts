import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ExerciseTimeEntryCreateWithoutUserInputSchema } from './ExerciseTimeEntryCreateWithoutUserInputSchema';
import { ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema } from './ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema';
import { ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema } from './ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema';
import { ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema } from './ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema';
import { ExerciseTimeEntryCreateManyUserInputEnvelopeSchema } from './ExerciseTimeEntryCreateManyUserInputEnvelopeSchema';
import { ExerciseTimeEntryWhereUniqueInputSchema } from './ExerciseTimeEntryWhereUniqueInputSchema';
import { ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema } from './ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema';
import { ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema } from './ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema';
import { ExerciseTimeEntryScalarWhereInputSchema } from './ExerciseTimeEntryScalarWhereInputSchema';

export const ExerciseTimeEntryUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ExerciseTimeEntryUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryCreateWithoutUserInputSchema).array(),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ExerciseTimeEntryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema),z.lazy(() => ExerciseTimeEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ExerciseTimeEntryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema),z.lazy(() => ExerciseTimeEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ExerciseTimeEntryUpdateManyWithoutUserNestedInputSchema;
