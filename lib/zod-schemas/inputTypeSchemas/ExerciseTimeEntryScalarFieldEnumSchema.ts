import { z } from 'zod';

export const ExerciseTimeEntryScalarFieldEnumSchema = z.enum(['id','userId','startTime','endTime','createdAt','updatedAt']);

export default ExerciseTimeEntryScalarFieldEnumSchema;
