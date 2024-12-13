import { z } from 'zod';

/////////////////////////////////////////
// EXERCISE TIME ENTRY SCHEMA
/////////////////////////////////////////

export const ExerciseTimeEntrySchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
})

export type ExerciseTimeEntry = z.infer<typeof ExerciseTimeEntrySchema>

export default ExerciseTimeEntrySchema;
