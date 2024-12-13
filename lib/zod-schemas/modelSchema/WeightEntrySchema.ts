import { z } from 'zod';

/////////////////////////////////////////
// WEIGHT ENTRY SCHEMA
/////////////////////////////////////////

export const WeightEntrySchema = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
})

export type WeightEntry = z.infer<typeof WeightEntrySchema>

export default WeightEntrySchema;
